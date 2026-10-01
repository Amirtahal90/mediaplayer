export class TheaterMode{
 constructor(root){this.root=root;this.active=false}
 toggle(){this.active=!this.active;this.root.classList.toggle("theater-mode",this.active);return this.active}
}