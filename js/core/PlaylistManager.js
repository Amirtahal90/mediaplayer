export class PlaylistManager{
 constructor(store){this.store=store;this.playlists=[]}
 async init(){this.playlists=await this.store.get("playlists")||[];return this.playlists}
 async create(name){const p={id:crypto.randomUUID(),name:String(name||"").trim()||"New playlist",items:[],createdAt:Date.now()};this.playlists.push(p);await this.store.put("playlists",this.playlists);return p}
 async remove(id){this.playlists=this.playlists.filter(p=>p.id!==id);await this.store.put("playlists",this.playlists)}
 async addItem(id,item){const p=this.playlists.find(x=>x.id===id);if(!p)return;p.items.push(item);await this.store.put("playlists",this.playlists)}
 async replace(id,items){const p=this.playlists.find(x=>x.id===id);if(!p)return;p.items=[...items];await this.store.put("playlists",this.playlists)}
}