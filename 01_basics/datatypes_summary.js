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


// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-Primitive)

let myyoutubename = "raj"
let anotherName=myyoutubename
anotherName="chai"

console.log(anotherName);
console.log(myyoutubename);

let user1={
    email:"qwhgdw",
    name:"whdg"
}

let user2=user1;

user2.email="new@mail"
console.log(user1);
console.log(user2);
