const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  let inBetween = false;
console.log(event)
  if(event.shiftKey && this.checked) {
    checkboxes.forEach( checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween){
        checkbox.checked = true;
      }

    } )
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
