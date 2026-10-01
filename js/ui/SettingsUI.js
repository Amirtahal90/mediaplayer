export class SettingsUI{
 constructor(root,settings={}){this.root=root;this.settings=settings}
 render(){this.root.innerHTML="";for(const [key,value] of Object.entries(this.settings)){const row=document.createElement("div");row.className="setting-line";row.textContent=key+": "+String(value);this.root.append(row)}}
}