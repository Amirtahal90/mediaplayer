export class FavoritesManager{
 constructor(library){this.library=library}
 getAll(){return this.library.items.filter(x=>x.favorite)}
 async toggle(id){await this.library.toggleFavorite(id);return this.library.items.find(x=>x.id===id)?.favorite||false}
 has(id){return !!this.library.items.find(x=>x.id===id)?.favorite}
}