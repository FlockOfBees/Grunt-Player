console.log("Hello World!");

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio){return;}; //ends function if no audio attached to key.
  audio.currentTime = 0; //resets time for rapid playing.
  audio.play();
  key.classList.add('playing');
});

function removeTransition(e) {
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
