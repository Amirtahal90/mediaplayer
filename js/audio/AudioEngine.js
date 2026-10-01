export class AudioEngine{
 constructor(media){this.media=media;this.ctx=null;this.source=null;this.analyser=null;this.gain=null;this.filters=[]}
 ensure(){if(this.ctx)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)throw new Error("Web Audio API unavailable");this.ctx=new C();this.source=this.ctx.createMediaElementSource(this.media);this.analyser=this.ctx.createAnalyser();this.analyser.fftSize=256;this.gain=this.ctx.createGain();let prev=this.source;const freqs=[60,170,310,600,1000,3000,6000,10000,14000,16000];this.filters=freqs.map((f,i)=>{const n=this.ctx.createBiquadFilter();n.type=i===0?"lowshelf":i===freqs.length-1?"highshelf":"peaking";n.frequency.value=f;n.Q.value=1;return n});this.filters.reduce((a,b)=>{a.connect(b);return b},this.source).connect(this.gain);this.gain.connect(this.analyser);this.analyser.connect(this.ctx.destination)}
 async resume(){this.ensure();if(this.ctx.state==="suspended")await this.ctx.resume()}
 setBand(index,db){if(this.filters[index])this.filters[index].gain.value=Number(db)}
 setMaster(v){this.ensure();this.gain.gain.value=Number(v)}
}