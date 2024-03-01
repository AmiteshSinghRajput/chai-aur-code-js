// primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol(to make any value unique), BigInt


const score =100
const scoreValue =100.00

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagaraj", "doga"];
let myObj={
    name: "Amitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);
console.log(typeof heros);
