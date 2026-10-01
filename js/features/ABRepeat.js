export class ABRepeat{
 constructor(engine){this.engine=engine;this.a=null;this.b=null}
 setA(){this.a=this.engine.el.currentTime;this.b=null;return this.a}
 setB(){const t=this.engine.el.currentTime;if(this.a===null){this.a=t;return {type:"a",time:t}}this.b=t<this.a?this.a:t;return this.b}
 clear(){this.a=this.b=null}
 update(){if(this.a!==null&&this.b!==null&&this.engine.el.currentTime>=this.b){this.engine.el.currentTime=this.a}}
 status(){return{a:this.a,b:this.b,active:this.a!==null&&this.b!==null}}
}