export class ThemeManager{
 constructor(){this.key="aura-theme"}
 init(){const v=localStorage.getItem(this.key)||"dark";document.body.dataset.theme=v;return v}
 set(v){const t=v==="light"?"light":"dark";document.body.dataset.theme=t;localStorage.setItem(this.key,t)}
}