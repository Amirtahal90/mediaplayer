export class LocalStorageStore{
 constructor(prefix="aura:"){this.prefix=prefix}
 get(key,fallback=null){try{const v=localStorage.getItem(this.prefix+key);return v===null?fallback:JSON.parse(v)}catch{return fallback}}
 set(key,value){localStorage.setItem(this.prefix+key,JSON.stringify(value))}
 remove(key){localStorage.removeItem(this.prefix+key)}
 clear(){Object.keys(localStorage).filter(k=>k.startsWith(this.prefix)).forEach(k=>localStorage.removeItem(k))}
}