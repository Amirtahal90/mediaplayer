export class MediaStorage{
 constructor(store){this.store=store}
 get(){return this.store.get("library")}
 set(items){return this.store.put("library",items)}
}