///////////////
// Numbers
///////////////
let age = 100;
let age1 = age;
console.log(age, age1)
age = 200; // age1 continua 100;
console.log(age, age1);


///////////////
// String
///////////////
let myName = 'Pedro';
let myName1 = myName;
console.log(myName, myName1);
myName = 'Bittencourt';
console.log(myName, myName1);


///////////////
// Array
///////////////
const players = [ 'Pedro', 'Antônio', 'João', 'Francisco' ];
const team = players;
console.log("Players team: ", players, team);
team[3] = 'Dexter'; //altera os dois arrays
console.log('Players, teams: ', players, team);
const team2 = players.slice(); //copia
const team3 = [].concat('players: ', players); //copia
const team4 = [...players]; //copia
const team5 = Array.from( players); //copia
team4[3] = 'Melhor Time'; //só altera team4
console.log('team4: ', team4 );
console.log('team5: ', team5);


///////////////
// Objects
///////////////
const person = {
  name: 'Pedro Bittencourt',
  age: 36
};

const copyCat = person; //referencia
copyCat.number = 69;

//copia e faz alteração
const copyCat2 = Object.assign({}, person, {number: 96, age: 63});
console.log('copyCat2: ', copyCat2);
const copyCat3 = {...person}; //copia o original, com numero 69
console.log('copyCat3', copyCat3);
const bitt = {
  name: 'Pedro',
  age: 72,
  social: {
    twitter: '@dezzaremusic',
    facebook: 'pmbittencourt'
  }
}
console.log('bitt: ', bitt);

const dev = Object.assign({}, bitt);
const dev2 = JSON.parse(JSON.stringify(bitt));

console.log('dev', dev);
console.log('dev2', dev2)
