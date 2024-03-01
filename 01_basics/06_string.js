const name ="Amitesh"
const repoCount=50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation way `${}`

let gameName = new String("Amitesh")
console.log(gameName[0]);
console.log(gameName.charAt(0));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));
console.log(gameName.split('e'));
console.log(gameName.substring(0,2));

console.log(gameName.slice(-6,3));

let newStringOne = "     amit   ftydtdff  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amitesh.com/amitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('amitesh'))




