export class ModalManager{
 constructor(root){this.root=root}
 open(content,className=""){this.close();const b=document.createElement("div");b.className="modal-backdrop";const m=document.createElement("div");m.className="modal "+className;m.innerHTML=content;b.append(m);b.addEventListener("click",e=>{if(e.target===b)this.close()});this.root.append(b);return m}
 close(){this.root.innerHTML=""}
}