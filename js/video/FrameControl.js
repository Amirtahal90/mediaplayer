export class FrameControl{
 constructor(video){this.video=video}
 next(frameRate=30){this.video.currentTime+=1/frameRate}
 previous(frameRate=30){this.video.currentTime=Math.max(0,this.video.currentTime-1/frameRate)}
}