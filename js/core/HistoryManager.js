export class HistoryManager{
 constructor(store){this.store=store;this.items=[]}
 async init(){this.items=await this.store.get("history")||[];return this.items}
 async touch(item,time=0){if(!item)return;const old=this.items.find(x=>x.id===item.id);const next={id:item.id,title:item.title,type:item.type,artist:item.artist||"Local file",time:Number(time)||0,updatedAt:Date.now()};if(old)Object.assign(old,next);else this.items.unshift(next);this.items.sort((a,b)=>b.updatedAt-a.updatedAt);this.items=this.items.slice(0,100);await this.store.put("history",this.items)}
 position(id){return this.items.find(x=>x.id===id)?.time||0}
 ids(){return new Set(this.items.map(x=>x.id))}
 async clear(){this.items=[];await this.store.put("history",[])}
}