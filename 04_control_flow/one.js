// if statement

const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");

// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("Test");

// if(balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allowed to buy course");
// } 

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}