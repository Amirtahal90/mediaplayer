export class FullscreenManager{
 constructor(target){this.target=target}
 async toggle(){if(!document.fullscreenElement)return this.target.requestFullscreen?.();return document.exitFullscreen?.()}
}