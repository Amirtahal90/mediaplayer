export class VideoFilters{
 constructor(el){this.el=el;this.values={brightness:100,contrast:100,saturation:100,hue:0,blur:0}}
 set(name,value){if(!(name in this.values))return;this.values[name]=Number(value);this.render()}
 render(){const v=this.values;this.el.style.filter="brightness("+v.brightness+"%) contrast("+v.contrast+"%) saturate("+v.saturation+"%) hue-rotate("+v.hue+"deg) blur("+v.blur+"px)"}
 reset(){this.values={brightness:100,contrast:100,saturation:100,hue:0,blur:0};this.render()}
}