export class MediaStorage{
 constructor(store){this.store=store}
 getAll(){return this.store.getAll("media")}
 save(item){return this.store.putItem("media",item)}
 remove(id){return this.store.deleteItem("media",id)}
 clear(){return this.store.clear("media")}
}