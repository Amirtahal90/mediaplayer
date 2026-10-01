export class Screenshot{
 constructor(video){this.video=video}
 capture(){if(!this.video.videoWidth||!this.video.videoHeight)throw new Error("No video frame available");const c=document.createElement("canvas");c.width=this.video.videoWidth;c.height=this.video.videoHeight;const x=c.getContext("2d");x.drawImage(this.video,0,0);c.toBlob(b=>{if(!b)return;const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="aura-frame-"+Date.now()+".png";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)},"image/png")}
}