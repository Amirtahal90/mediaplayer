export class MediaScanner{
 constructor(library){this.library=library}
 async scan(files,onProgress=()=>{}){const all=[...files],accepted=all.filter(f=>/^audio\//.test(f.type)||/^video\//.test(f.type)),out=[];for(let i=0;i<accepted.length;i++){const added=await this.library.addFiles([accepted[i]]);out.push(...added);onProgress((i+1)/accepted.length,added[0])}return out}
}