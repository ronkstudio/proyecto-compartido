// Paso 3 (globo): lon/lat con 2 decimales, en enteros relativos. Polígonos separados por |, anillos por ;
const fs=require('fs');
const g=JSON.parse(fs.readFileSync('globo.geojson','utf8'));
const out={};let pts=0,holes=0;
for(const f of g.features){
  out[f.properties.id]=f.geometry.coordinates.map(poly=>{holes+=poly.length-1;return poly.map(ring=>{
    let px=0,py=0;const v=[];
    for(const p of ring.slice(0,-1)){const x=Math.round(p[0]*100),y=Math.round(p[1]*100);v.push(x-px,y-py);px=x;py=y;pts++;}
    return v.join(',');}).join(';')}).join('|');
}
fs.writeFileSync('globo.json',JSON.stringify(out));
console.log('puntos',pts,'huecos',holes,'bytes',fs.statSync('globo.json').size);
