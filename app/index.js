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