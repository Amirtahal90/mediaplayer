export class QueueManager{
 constructor(){this.items=[];this.index=-1;this.shuffle=false;this.repeat="off";this.listeners=new Set()}
 setItems(items){this.items=[...items];this.index=this.items.length?Math.max(0,Math.min(this.index,this.items.length-1)):-1;this.emit()}
 add(item){if(item){this.items.push(item);if(this.index<0)this.index=0;this.emit()}}
 addMany(items){items.filter(Boolean).forEach(i=>this.items.push(i));if(this.index<0&&this.items.length)this.index=0;this.emit()}
 remove(i){if(i<0||i>=this.items.length)return;this.items.splice(i,1);if(i<this.index)this.index--;else if(this.index>=this.items.length)this.index=this.items.length-1;this.emit()}
 clear(){this.items=[];this.index=-1;this.emit()}
 current(){return this.items[this.index]||null}
 next(){if(!this.items.length)return null;if(this.repeat==="one")return this.current();if(this.shuffle){this.index=Math.floor(Math.random()*this.items.length);return this.current()}if(this.index<this.items.length-1){this.index++;return this.current()}if(this.repeat==="all"){this.index=0;return this.current()}return null}
 previous(){if(!this.items.length)return null;if(this.index>0){this.index--;return this.current()}if(this.repeat==="all"){this.index=this.items.length-1;return this.current()}return this.current()}
 setShuffle(v){this.shuffle=!!v;this.emit()}
 setRepeat(v){this.repeat=v;this.emit()}
 on(fn){this.listeners.add(fn);fn(this);return()=>this.listeners.delete(fn)}
 emit(){this.listeners.forEach(fn=>fn(this))}
}