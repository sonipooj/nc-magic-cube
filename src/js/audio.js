import soundFlip from '../assets/audio/card-flip.mp3'
import soundFlipback from '../assets/audio/card-flip-back.mp3'
import soundTada from '../assets/audio/drumroll.mp3'
import lost from '../assets/audio/losing.mp3'

let sounds = {};
// sounds.flip = new Audio("flip");
 sounds.flip = new Audio(soundFlip);
 sounds.flipBack = new Audio(soundFlipback);
 sounds.tada = new Audio(soundTada);
 sounds.lost = new Audio(lost);
// sounds.flipBack = new Audio("../assets/audio/card-flip-back.mp3");
// sounds.countdown = new Audio("../assets/audio/countdown.wav");

export let play = sound => {
    if (sounds[sound]) {
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};

export let stop = sound => {
    if (sounds[sound]) {
        sounds[sound].pause();
    }
};