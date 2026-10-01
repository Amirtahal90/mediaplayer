export class ResumePlayback{
 constructor(history){this.history=history}
 get(item){const p=this.history.position(item?.id);return p>5?p:0}
 async save(item,time){return this.history.touch(item,time)}
}