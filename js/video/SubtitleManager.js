export class SubtitleManager{
 constructor(video){this.video=video;this.track=null}
 load(file){if(this.track)this.track.remove();const url=URL.createObjectURL(file);const t=document.createElement("track");t.kind="subtitles";t.label=file.name;t.srclang="und";t.src=url;t.default=true;this.video.append(t);this.track=t;return t}
 toggle(enabled){if(this.track)this.track.track.mode=enabled?"showing":"disabled"}
}