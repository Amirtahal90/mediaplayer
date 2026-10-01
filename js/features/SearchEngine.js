export class SearchEngine{
 constructor(library){this.library=library}
 query(text,options={}){const q=String(text||"").trim().toLowerCase();let a=q?this.library.items.filter(x=>[x.title,x.artist,x.name,x.mime,x.type].some(v=>String(v).toLowerCase().includes(q)):[...this.library.items];if(options.type)a=a.filter(x=>x.type===options.type);if(options.favorite)a=a.filter(x=>x.favorite);return a}
}