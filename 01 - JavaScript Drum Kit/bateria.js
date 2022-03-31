//keykode.info
function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!audio) return; //impede a função de rodar tudo junto
  audio.currentTime = 0; //volta p/ início
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event){
  //ignora a função se não for transform
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
