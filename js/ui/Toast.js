export class Toast{
 constructor(root){this.root=root}
 show(message,type="success",duration=2600){const el=document.createElement("div");el.className="toast "+type;el.textContent=message;this.root.append(el);setTimeout(()=>{el.remove()},duration)}
}