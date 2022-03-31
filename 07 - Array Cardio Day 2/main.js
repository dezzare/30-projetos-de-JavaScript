const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Pedro', year: 1985 },
  { name: 'Tábata', year: 1991 },
  { name: 'Pedrinho', year: 2020 },
];

const comments = [
  { text: 'Super good', id: 521234 },
  { text: 'Love this!', id: 821234 },
  { text: 'You are the best', id: 9198342 },
  { text: 'O que eu quero é chocolate', id: 123543 },
  { text: 'Nice', id: 545678 },
]


////////////////////////
//Some and Every Checks
////////////////////////
//retornam booleano

// Array.prototype.some() // tem PELO MENOS UM com mais de 18?
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 18);
console.log('IsAdult: ',  {isAdult});


//Array.prototype.every() // TODOS com mais de 18?
const allAdults = people.every(person=> ((new Date()).getFullYear()) - person.year >= 18 );
console.log('allAdults', {allAdults});

// Find == filter, MAS retorna apenas UM
//Array.prototype.find()
const comment = comments.find(comment => comment.id === 123543 );
console.log(comment);


// Ache o comentário(findIndex), depois delete (splice)
// Array.prototype.findIndex() // ache comentário com este ID
const index = comments.findIndex(comment => comment.id === 123543 );
console.log('index: ', index);

//comments.splice(index. 1);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index +1)
];
console.table(newComments)
