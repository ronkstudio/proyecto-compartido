// Paso 1: países -> continentes (GeoJSON en lon/lat "desenrollado", sin corte en 180)
const fs=require('fs');
const topo=require('./node_modules/world-atlas/countries-50m.json');
const {feature}=require('topojson-client');
const pc=require('polygon-clipping');
const wc=require('world-countries');
const byNum={};for(const c of wc){if(c.ccn3)byNum[c.ccn3]=c;}
const fc=feature(topo,topo.objects.countries);
const CENTER={AF:20,EU:15,AS:100,NA:-100,SA:-60,OC:150};
const byName={'Somaliland':'AF','Kosovo':'EU','N. Cyprus':'EU','Indian Ocean Ter.':'AS','Siachen Glacier':'AS'};
function contOf(f){
  if(byName[f.properties.name])return byName[f.properties.name];
  const c=byNum[f.id]; if(!c)throw new Error('sin datos '+f.properties.name);
  if(c.region==='Antarctic')return null;
  if(c.region==='Americas')return c.subregion==='South America'?'SA':'NA';
  return {Africa:'AF',Europe:'EU',Asia:'AS',Oceania:'OC'}[c.region];
}
function unwrapRing(r){const o=[r[0].slice()];for(let i=1;i<r.length;i++){let x=r[i][0];const px=o[i-1][0];while(x-px>180)x-=360;while(x-px<-180)x+=360;o.push([x,r[i][1]]);}return o;}
function meanX(r){let s=0;for(const p of r)s+=p[0];return s/r.length}
function meanY(r){let s=0;for(const p of r)s+=p[1];return s/r.length}
function shiftTo(ring,center){const m=meanX(ring);const k=Math.round((center-m)/360);return k?ring.map(p=>[p[0]+360*k,p[1]]):ring;}
function polyTo(poly,center){const outer=shiftTo(unwrapRing(poly[0]),center);const mo=meanX(outer);return [outer,...poly.slice(1).map(h=>shiftTo(unwrapRing(h),mo))];}
// Corrección por pedazo para territorios lejanos
function partCont(name,cont,poly){
  const x=meanX(poly[0]),y=meanY(poly[0]);
  if(name==='France'||name==='Netherlands'){
    if(x<-40&&y<10)return 'SA'; if(x<-40)return 'NA'; if(x>30&&y<0)return 'AF';
  }
  if(name==='Turkey'&&y>40.3&&x<29.2)return 'EU';
  return cont;
}
const parts={AF:[],EU:[],AS:[],NA:[],SA:[],OC:[]};
let russia=null;
for(const f of fc.features){
  const cont=contOf(f); if(!cont)continue;
  const polys=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;
  if(f.properties.name==='Russia'){russia=polys.map(p=>polyTo(p,CENTER.AS));continue;}
  for(const p of polys){const c=partCont(f.properties.name,cont,p);parts[c].push(polyTo(p,CENTER[c]));}
}
// Rusia: lo que queda al oeste de los Urales es Europa (línea aproximada)
const ural=[[[10,40],[58,40],[58,50.5],[59,53],[59.5,56],[59.3,59.5],[60,64],[65,66.5],[66.5,69],[64,72],[70,76.5],[72,78],[72,86],[10,86],[10,40]]];
const ruEU=pc.intersection(russia,ural), ruAS=pc.difference(russia,ural);
parts.EU.push(...ruEU); parts.AS.push(...ruAS);
const out={type:'FeatureCollection',features:[]};
for(const k of Object.keys(parts)){
  const u=pc.union(...parts[k].map(p=>[p]));
  out.features.push({type:'Feature',properties:{id:k},geometry:{type:'MultiPolygon',coordinates:u}});
  console.log(k,parts[k].length,'->',u.length,'polígonos');
}
fs.writeFileSync('continentes.geojson',JSON.stringify(out));
