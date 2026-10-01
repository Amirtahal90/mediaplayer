export class AudioTrackManager{
 constructor(video){this.video=video}
 get tracks(){return [...this.video.audioTracks||[]]}
}