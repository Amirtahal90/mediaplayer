export class Visualizer{
 constructor(canvas,engine){this.canvas=canvas;this.engine=engine;this.ctx=canvas.getContext("2d");this.running=false;this.mode="bars"}
 start(){if(this.running)return;this.running=true;this.loop()}
 stop(){this.running=false}
 setMode(m){this.mode=m}
 resize(){const r=this.canvas.getBoundingClientRect(),d=devicePixelRatio||1;this.canvas.width=r.width*d;this.canvas.height=r.height*d;this.ctx.setTransform(d,0,0,d,0,0)}
 loop(){if(!this.running)return;requestAnimationFrame(()=>this.loop());if(!this.engine.analyser)return;this.resize();const w=this.canvas.clientWidth,h=this.canvas.clientHeight,a=new Uint8Array(this.engine.analyser.frequencyBinCount);this.engine.analyser.getByteFrequencyData(a);this.ctx.clearRect(0,0,w,h);const n=Math.min(64,a.length),bw=w/n*.72;for(let i=0;i<n;i++){const v=a[i]/255,hh=v*h*.9,x=i*w/n;this.ctx.fillStyle="rgba(125,255,107,"+(0.12+v*.55)+")";this.ctx.fillRect(x, h-hh, bw, hh)}}
}