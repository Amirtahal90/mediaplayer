export class MediaEngine{
 constructor(element,state){this.el=element;this.state=state;["loadedmetadata","timeupdate","play","pause","ended","volumechange","ratechange","error","durationchange"].forEach(e=>this.el.addEventListener(e,()=>this.sync()))}
 load(item,autoplay=false){if(!item?.url)return Promise.reject(new Error("Invalid media item"));this.el.pause();this.el.src=item.url;this.el.load();this.state.patch({media:item,currentTime:0,duration:item.duration||0,isPlaying:false});return autoplay?this.play().catch(()=>{}):Promise.resolve()}
 play(){return this.el.play().then(()=>this.state.patch({isPlaying:true})).catch(e=>{this.state.patch({isPlaying:false});throw e})}
 pause(){this.el.pause();this.state.patch({isPlaying:false})}
 toggle(){return this.el.paused?this.play():Promise.resolve(this.pause())}
 stop(){this.el.pause();this.el.currentTime=0;this.state.patch({isPlaying:false,currentTime:0})}
 seek(s){if(!Number.isFinite(s))return;this.el.currentTime=Math.max(0,Math.min(this.duration,s));this.sync()}
 skip(d){this.seek(this.el.currentTime+d)}
 setVolume(v){const n=Math.max(0,Math.min(1,Number(v)));this.el.volume=n;this.el.muted=n===0;this.sync()}
 toggleMute(){this.el.muted=!this.el.muted;this.sync()}
 setRate(v){const r=Math.max(.25,Math.min(4,Number(v)));this.el.playbackRate=r;this.sync()}
 get duration(){return Number.isFinite(this.el.duration)?this.el.duration:0}
 sync(){this.state.patch({currentTime:this.el.currentTime||0,duration:this.duration,isPlaying:!this.el.paused,volume:this.el.volume,muted:this.el.muted,rate:this.el.playbackRate||1})}
}