export class ContextMenu{
 constructor(){this.el=null}
 open(x,y,items){this.close();this.el=document.createElement("div");this.el.className="context-menu";Object.assign(this.el.style,{position:"fixed",left:x+"px",top:y+"px",zIndex:300});items.forEach(([label,fn])=>{const b=document.createElement("button");b.className="nav-item";b.textContent=label;b.onclick=()=>{fn();this.close()};this.el.append(b)});document.body.append(this.el);setTimeout(()=>document.addEventListener("click",()=>this.close(),{once:true}),0)}
 close(){this.el?.remove();this.el=null}
}