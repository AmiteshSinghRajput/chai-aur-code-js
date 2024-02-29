let score = undefined;

console.log(typeof score);// always check type because when you reqeust body from frontend that time we don't know what data type it is
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "33" => 33
// "33abc"=> NaN
// true=> 1
//undefined => NaN
// null => 0

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true 0=> false
//""=>false 
//"Amitesh" => false

let someNumber=33

let StringNumber = String(someNumber)
console.log(StringNumber);


