// Primitive

// 7 types: String, Number, Boolean, null, undefine, Symbol, BigInt


const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

// const bigNumber = 4654552154554n


//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]

let myObj = {
    name: "Vedant",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// Stack(Premitive), Heap (Non-Primitive)

// Stack (Creates the reference and make changes in the reference, doesn't change the original value)
let myYoutubename = "vedantkulkarni"
let anothername = myYoutubename
anothername = "vedantwebsite"

console.log(myYoutubename);
console.log(anothername);

// Heap (Creates the reference and make changes in both the reference and original value)
let userOne = {
    email: "vedant@gmail.com",
    upi: "vedant@ybl"
}

let userTwo = userOne 
userTwo.email = "vedant@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);
