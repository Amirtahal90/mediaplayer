export class LibraryManager{
 constructor(store){this.store=store;this.items=[];this.listeners=new Set()}
 async init(){this.items=await this.store.get("library")||[];this.emit();return this.items}
 async addFiles(files){const added=[];for(const file of files){if(!file.type.startsWith("audio/")&&!file.type.startsWith("video/"))continue;const item={id:crypto.randomUUID(),name:file.name,title:file.name.replace(/\.[^.]+$/,""),artist:"Local file",type:file.type.startsWith("video/")?"video":"audio",mime:file.type,size:file.size,url:URL.createObjectURL(file),file,addedAt:Date.now(),duration:0,favorite:false};added.push(await this.readDuration(item))}this.items.push(...added);await this.persist();this.emit();return added}
 readDuration(item){return new Promise(resolve=>{const el=document.createElement(item.type);el.preload="metadata";el.onloadedmetadata=()=>{item.duration=Number.isFinite(el.duration)?el.duration:0;el.remove();resolve(item)};el.onerror=()=>{el.remove();resolve(item)};el.src=item.url})}
 async toggleFavorite(id){const i=this.items.find(x=>x.id===id);if(!i)return;i.favorite=!i.favorite;await this.persist();this.emit()}
 async remove(id){const i=this.items.find(x=>x.id===id);if(i?.url)URL.revokeObjectURL(i.url);this.items=this.items.filter(x=>x.id!==id);await this.persist();this.emit()}
 async persist(){await this.store.put("library",this.items.map(({file,...safe})=>safe))}
 on(fn){this.listeners.add(fn);fn(this.items);return()=>this.listeners.delete(fn)}
 emit(){this.listeners.forEach(fn=>fn(this.items))}
 search(q){const s=String(q||"").trim().toLowerCase();if(!s)return this.items;return this.items.filter(i=>[i.title,i.artist,i.name,i.type].some(v=>String(v).toLowerCase().includes(s)))}
}