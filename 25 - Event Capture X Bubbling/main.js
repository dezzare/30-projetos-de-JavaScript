const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event){
  //vai mostrar quais itens foram clicados
  if(this.classList.value == 'one') {
    console.log(this.classList.value, 'Pai')  
  }else if(this.classList.value == 'two') {
    console.log(this.classList.value, 'Filho' )
  }else if(this.classList.value == 'three') {
    console.log(this.classList.value, 'Neto' )
  };

  // para o Bubbling
  // só vai pegar a div clicada, caso contrário pega todos parents
  // event.stopPropagation()
}

divs.forEach(element => element.addEventListener('click', logText, {
  // Bubbling = quando evento acontece em um elemento,
  // ele primeiro aciona/roda os 'handlers' dele
  // depois nos 'parent', e todos outros 'ancestrais'

  // Bubbling X Capture
  // capture = false (default)
  // capture = ordem inversa (Pai, filho, neto)
  // capture: false,
  capture: true,
  once: true //só roda o evento uma vez
}));

button.addEventListener('click', () => {
  console.log('CLICK!!!');
}, {
    once: true // só deixa clicar no botão uma vez
  });
