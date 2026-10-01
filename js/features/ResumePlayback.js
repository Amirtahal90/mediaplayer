export class ResumePlayback{
 constructor(history){this.history=history}
 get(item){const t=this.history.position(item?.id);return t>5?t:0}
 shouldResume(item){const t=this.get(item);return t>0&&(!item.duration||t<item.duration-8)}
 async save(item,time){if(item)await this.history.touch(item,time)}
}