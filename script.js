//jshint esnext: true

function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return; //no audio assigned to key - stop f()
    audio.currentTime = 0; //rewind audion to start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((el) => el.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);