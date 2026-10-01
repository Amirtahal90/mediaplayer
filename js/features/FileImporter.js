export class FileImporter{
 constructor(input,scanner,onAdded=()=>{}){this.input=input;this.scanner=scanner;this.onAdded=onAdded;input.addEventListener("change",()=>this.import(input.files))}
 async import(files){const items=await this.scanner.scan(files);this.onAdded(items);this.input.value="";return items}
}