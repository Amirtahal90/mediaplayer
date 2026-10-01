export class DragDrop{
 constructor(target,callback){this.target=target;this.callback=callback;for(const e of ["dragenter","dragover"]){target.addEventListener(e,this.over.bind(this))}for(const e of ["dragleave","drop"]){target.addEventListener(e,this.leave.bind(this))}target.addEventListener("drop",this.drop.bind(this))}
 over(e){e.preventDefault();this.target.classList.add("is-over")}
 leave(e){e.preventDefault();this.target.classList.remove("is-over")}
 drop(e){e.preventDefault();this.target.classList.remove("is-over");if(e.dataTransfer?.files?.length)this.callback([...e.dataTransfer.files])}
}