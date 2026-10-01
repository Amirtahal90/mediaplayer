export class PlaylistUI{
 constructor(root,manager){this.root=root;this.manager=manager}
 render(){this.root.innerHTML="";this.manager.playlists.forEach(p=>{const b=document.createElement("button");b.className="nav-item";b.textContent=p.name;b.dataset.playlist=p.id;this.root.append(b)})}
}