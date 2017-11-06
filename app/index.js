console.log("hello word from webpack ahora si");

//Empezando ES6

let limit = 100;
limit = 200;
console.log(limit);

//Constantes
const emails = ['alba@email.com','anfer@email.com','pedro@email.com'];
emails.push('ksjasdasjd');
console.log(emails);


//Scopes
{
	let limit = 10;
	console.log('backstage limit', limit);
}

console.log('overall limit', limit);

//Testing
function hello(){
	let message = "Hello!";
	console.log(message);
}

//Greetings
function greeting(){
	let message = "From the other side";
	console.log(message);
}

hello();
greeting();

//Template literals
let a = `Hola`;
let b = `${a} ke ase`;

console.log(b);

//Spread Operators and Rest parameters

let arr1 = [20,30,40];
let arr2 = [10, ...arr1, 50]; //Spread operator
console.log(arr2);

let arr3 = ['Dana', 'Erik', 'Frank'];
let arr4 = ['Alice', 'Bob', 'Carl', ...arr3];
console.log(arr4);

//Rest parameters
function restparamtests(...params){
	console.log(params);
}
restparamtests(1, 2, 3, 4);

//Destructuring assignment on Arrays and objects
let arr5 = [4,5,6,7,8];
let [cuatro,cinco] = arr5;
console.log(cuatro,cinco);

let arr6 = ["Simba", "Zazu", "Nala", "Timon", "Pumba"];
let [simba,zazu] = arr6;
console.log(simba,zazu);

let lion = {
	name: "Mufasa",
	kids: 1
}

let { name, kids } = lion;

console.log(name, kids);

//Arrow functions

let cheer = () => {
	console.log("Woohoo!");
}

cheer();

//Map and filter methods

let values = [20, 30, 40];

let doubled = values.map((n) => n*2);

console.log(doubled);

let filters = doubled.filter((n) => n<80);

console.log(filters);

//String helper methods
let str = "Wooh" + "oo".repeat(50);
console.log(str);

console.log("arepera".startsWith("are"));
console.log("arepera".endsWith("era"));
console.log("arepera".includes("pera"));

//Checking numbers

const checkNumber = (item, number) => {
	//return Number.isFinite(number);
	return Number.isSafeInteger(number);
}

console.log(checkNumber('random Item',5));

//Modules
import {add} from './math';
import multiply from './math';

console.log(add(3,5));
console.log(multiply(3,2));

//Classes
import {Animal, Lion, Calculator} from './animalClass';
let king = new Animal("Mufasa", 4.5);
king.hello();

let kingsSon = new Lion("Simba", 3, "Gold");
kingsSon.hello();

let calculatorVar = Calculator.multiply(3,9);
console.log(calculatorVar);

//Prototypes

function Wizard(name, house, pet){
	this.name = name;
	this.house = house;
	this.pet = pet;
	this.greet = () => `I'm ${this.name} from ${this.house}`
}

Wizard.prototype.info = function(){
	return `Just testing`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");

console.log(harry.greet());
console.log(harry.info());

// Data Structures - Set
let st1 = new Set();
st1.add(5);
st1.add({x:1,y:2});
st1.add("Just testing sets")
console.log(st1);
console.log(st1.size);
console.log(st1.has(5));

let nmrs1 = [4,6,8,10,12,14];
let st2 = new Set(nmrs1);

for(let element of st2.values()){
	console.log(element);
}

let chrs = 'asfdsfokiodsepwro[xc,xz.cv,ds;lfkqas;dfgkasfgassd';
let chrsArr = chrs.split('');
let chrsSt= new Set(chrsArr);


//Data Structures - Map
let mp1 = new Map();

mp1.set("key 1","return value for a string key");
mp1.set({a: 'key'}, "return value for a object key");
mp1.set(()=>{},'return value for a function key');
console.log(mp1);

let nmrs2 = [[1,"one"],[2,"two"],[3,"three"],[4,"four"],[5,"five"]];

let mp2 = new Map(nmrs2);

for (let [key, value] of mp2.entries()){
	console.log(`${key} points to ${value}`);
}

//Exercise
let string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
  let letters = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter,1);
    } else {
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');
console.log(a_count);

//Closures
let callReveal = () => {
	let secret = 'ES6 Rocks!';

	let reveal = () => {
		console.log(secret);
	}

	reveal();
}

callReveal();

//Function Factories
const addSuffix = (x) => {
	const concat = (y) => {
		return y + x;
	}
	return concat;
}

let addNess = addSuffix("ness");
let addHappi = addNess("happi");

console.log(addHappi);

const mathMultiply = x => y => y*x;

let nojom = mathMultiply(2);
let mplyRslt = nojom(9);
console.log(mplyRslt);

//Private methods using closures
const budget = () => {
	let balance = 0;
	let changeBal = (val) => {
		return balance += val;
	}
	const deposit20 = () => changeBal(20);
	const check = () => balance;

	return {
		deposit20: deposit20,
		check: check
	}
}

let wallet = budget();
wallet.deposit20();

console.log(wallet.check());