const dogs = [{ name: 'Dexter', age: 4 }, { name: 'Max', age: 3 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Normal
console.log('hello world');


console.log('Sou uma string de %s !', '💩');


console.warn('OPS');

console.error('PQP');

console.info('Cachorros tem 4 patas')

const p = document.querySelector('p');

console.assert(p.classList.contains('ai'), 'Algo está errado');

console.clear();

console.log(p);
console.dir(p);


dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log( `${dog.name} is ${dog.age} years old` );
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});


console.count('Pedro');
console.count('Pedro');
console.count('Tábata');
console.count('Pedro');
console.count('Pedro');
console.count('Tábata');
console.count('Tábata');
console.count('Pedro');
console.count('Tábata');
console.count('Tábata');
console.count('Tábata');
console.count('Pedro');
console.count('Pedro');
console.count('Pedro');
console.count('Tábata');
console.count('Tábata');
console.count('Pedro');


console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

console.table(dogs)

