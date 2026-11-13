// Paso 2: proyección de Miller y trazos SVG compactos (relativos, 1 decimal)
const fs=require('fs');
const g=JSON.parse(fs.readFileSync('simple.geojson','utf8'));
const R=180/Math.PI;
const my=lat=>R*1.25*Math.log(Math.tan(Math.PI/4+0.4*lat/R));
const out={};
let total=0;
for(const f of g.features){
  let d='',pts=0;
  for(const poly of f.geometry.coordinates)for(const ring of poly){
    let px=null,py=null;
    ring.forEach((p,i)=>{
      const x=Math.round(p[0]*10), y=Math.round(-my(p[1])*10);
      if(i===0){d+='M'+x/10+' '+y/10;}
      else{const dx=(x-px)/10,dy=(y-py)/10; if(!dx&&!dy)return; d+='l'+dx+' '+dy;}
      px=x;py=y;pts++;
    });
    d+='z';
  }
  d=d.replace(/ -/g,'-').replace(/l0\./g,'l.').replace(/l-0\./g,'l-.').replace(/ 0\./g,' .').replace(/-0\./g,'-.');
  out[f.properties.id]=d; total+=d.length; console.log(f.properties.id,pts,'pts',d.length,'chars');
}
console.log('total',total,'Y top',(-my(84)).toFixed(1),'Y bottom',(-my(-57)).toFixed(1));
fs.writeFileSync('paths.json',JSON.stringify(out));
