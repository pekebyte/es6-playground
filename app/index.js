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
let b = `${a} perra`;

console.log(b);

//Spread Operators and Rest parameters

let arr1 = [20,30,40];
let arr2 = [10, ...arr1, 50]; //Spread operator
console.log(arr2);

let arr3 = ['Dana', 'Erik', 'Frank'];
let arr4 = ['Alice', 'Bob', 'Carl', ...arr3];
console.log(arr4);

//Rest parameters
function chamaladoy(...params){
	console.log(params);
}
chamaladoy("Perra", "No", "La", "Das");

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