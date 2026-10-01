export class SettingsStorage{
 constructor(storage){this.storage=storage}
 get(defaults={}){return {...defaults,...(this.storage.get("settings",{})||{})}}
 set(key,value){const current=this.storage.get("settings",{});current[key]=value;this.storage.set("settings",current);return current}
}