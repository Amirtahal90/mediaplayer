export class AudioAnalyzer{
 constructor(engine){this.engine=engine}
 get analyser(){return this.engine.analyser}
 getFrequencyData(){if(!this.analyser)return new Uint8Array();const a=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteFrequencyData(a);return a}
 getAverageLevel(){const a=this.getFrequencyData();return a.length?a.reduce((x,y)=>x+y,0)/(a.length*255):0}
}