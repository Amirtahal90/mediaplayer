export class PlayerState{
 constructor(){this.data={media:null,isPlaying:false,currentTime:0,duration:0,volume:1,muted:false,rate:1,view:"home"};this.listeners=new Set()}
 get(){return structuredClone(this.data)}
 patch(next){this.data={...this.data,...next};this.listeners.forEach(fn=>fn(this.get()))}
 subscribe(fn){this.listeners.add(fn);fn(this.get());return()=>this.listeners.delete(fn)}
}