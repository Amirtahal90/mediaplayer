export class Equalizer{
 constructor(engine){this.engine=engine;this.bands=[60,170,310,600,1000,3000,6000,10000,14000,16000];this.presets={Flat:[0,0,0,0,0,0,0,0,0,0],Rock:[4,3,2,0,-1,1,3,4,4,3],Pop:[-1,2,4,3,1,-1,-2,-1,2,3],Bass:[7,5,4,2,0,-1,-2,-2,-1,-1],Vocal:[-2,-1,0,2,4,4,3,1,0,-1]}}
 apply(values){values.forEach((v,i)=>this.engine.setBand(i,v))}
 preset(name){const v=this.presets[name]||this.presets.Flat;this.apply(v);return v}
}