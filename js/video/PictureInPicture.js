export class PictureInPicture{
 constructor(video){this.video=video}
 supported(){return "pictureInPictureEnabled" in document}
 enter(){return this.video.requestPictureInPicture?.()}
 exit(){return document.exitPictureInPicture?.()}
}