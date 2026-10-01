export class VideoEngine{
 constructor(video){this.video=video}
 load(url){this.video.src=url;this.video.load()}
 play(){return this.video.play()}
 pause(){this.video.pause()}
 seek(seconds){this.video.currentTime=Math.max(0,seconds)}
 setRate(rate){this.video.playbackRate=Number(rate)}
}