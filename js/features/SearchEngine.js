export class SearchEngine{
 constructor(library){this.library=library}
 query(text,options={}){let a=this.library.search(text);if(options.type)a=a.filter(x=>x.type===options.type);return a.sort((x,y)=>x.title.localeCompare(y.title))}
}