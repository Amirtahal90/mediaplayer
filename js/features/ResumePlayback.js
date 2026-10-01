export class ResumePlayback{
 constructor(store){this.store=store}
 async save(item,time){if(item)await this.store.put("history",{id:item.id,title:item.title,time,updatedAt:Date.now()})}
 async load(){return await this.store.get("history")||[]}
}