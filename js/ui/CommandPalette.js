export class CommandPalette{
 constructor(open){this.open=open}
 register(commands){this.commands=commands}
 show(){this.open(this.commands||[])}
}