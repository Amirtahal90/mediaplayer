export class SearchUI{
 constructor(input,onSearch){this.input=input;this.onSearch=onSearch;input.addEventListener("input",()=>onSearch(input.value))}
 focus(){this.input.focus();this.input.select()}
}