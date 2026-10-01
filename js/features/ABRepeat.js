export class ABRepeat{
 constructor(engine){this.engine=engine;this.a=null;this.b=null}
 setA(){this.a=this.engine.el.currentTime;return this.a}
 setB(){this.b=this.engine.el.currentTime;return this.b}
 clear(){this.a=this.b=null}
 update(){if(this.a!==null&&this.b!==null&&this.engine.el.currentTime>=this.b)this.engine.el.currentTime=this.a}
}