// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.__proto__);
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23,5,30,6,8)
let myCreateDate = new Date("2023-01-14")


// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/100000000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

