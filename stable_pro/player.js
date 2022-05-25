import audios from './data';
import {path} from './utils';
import elements from './playerElements';

export default {
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,
  start() {
    elements.get.call(this);
    
    this.update();
    this.audio.onended = () => this.next(); 
  },
  next() {
    this.currentPlaying++;
    this.audio.play();

    if (this.currentPlaying == this.audioData.length) this.restart();
      this.update();
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];
    this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.audio.src = path(this.currentAudio.file);
  },
  restart() {
    this.currentPlaying = 0;
    this.update();
    this.audio.play();
  }
};