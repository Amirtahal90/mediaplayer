export class MiniPlayer{
 constructor(root,events={}){this.root=root;this.events=events}
 show(){this.root.classList.remove("hidden")}
 hide(){this.root.classList.add("hidden")}
}