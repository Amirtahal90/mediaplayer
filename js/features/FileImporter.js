export class FileImporter{
 constructor(input,library,onAdded=()=>{}){this.input=input;this.library=library;this.onAdded=onAdded;input.addEventListener("change",()=>this.import(input.files))}
 async import(files){const valid=[...files].filter(f=>/^audio\//.test(f.type)||/^video\//.test(f.type));if(!valid.length)return[];const items=await this.library.addFiles(valid);this.onAdded(items);return items}
}