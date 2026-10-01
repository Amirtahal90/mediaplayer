export class AudioTrackManager{
 constructor(video){this.video=video}
 get tracks(){return [...(this.video.audioTracks||[])]}
 get supported(){return "audioTracks" in this.video}
 select(index){const tracks=this.tracks;tracks.forEach((t,i)=>{t.enabled=i===index});return tracks[index]||null}
}