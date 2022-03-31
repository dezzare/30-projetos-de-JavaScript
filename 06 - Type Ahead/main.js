
//const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//const endpoint = 'https://gist.githubusercontent.com/letanure/3012978/raw/78474bd9db11e87de65a9d3c9fc4452458dc8a68/estados-cidades.json';

const endpointCities = 'https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json';

const endpointStates = 'https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json'

let cities = [];
fetch(endpointCities)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

let states = [];
fetch(endpointStates)
  .then(blob => blob.json())
  .then(data => states.push(...data));


function findMatchesCities(wordToMatch, cities) {
  return (cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.Nome.match(regex);
  }))
}

function findMatchesStates(wordToMatch, states) {
  return (states.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.Nome.match(regex);
  }))
}

function displayMatches() {
  const matchArrayCities = findMatchesCities(this.value, cities);
  const matchArrayStates = findMatchesStates(this.value, states);
  let matchArray = [...matchArrayStates, ...matchArrayCities];
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const stateName = place.Nome.replace(regex, `<span class="hl">${this.value}</span>`);
//    const cityName = place.Nome.replace(regex, `<span class="hl">${this.value}</span>`);
//<span class="name"> ${cityName}, ${stateName}</span>
    return `
        <li>
          <span class="name"> ${stateName}</span>
       </li>
      `;
  }
  ).join('')


suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);




















