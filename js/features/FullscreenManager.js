export class FullscreenManager{
 constructor(target){this.target=target}
 async toggle(){if(document.fullscreenElement)return document.exitFullscreen();return this.target.requestFullscreen?.()}
}