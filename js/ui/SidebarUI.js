export class SidebarUI{
 constructor(sidebar){this.sidebar=sidebar}
 toggle(){document.body.classList.toggle("sidebar-open")}
 close(){document.body.classList.remove("sidebar-open")}
}