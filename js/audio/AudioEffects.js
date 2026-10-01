export class AudioEffects{
 constructor(engine){this.engine=engine;this.bypass=true}
 setBypass(value){this.bypass=!!value}
 setMaster(value){if(this.engine)this.engine.setMaster(Number(value))}
}