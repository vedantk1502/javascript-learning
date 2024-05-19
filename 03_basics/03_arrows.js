const user = {
    username: "vedant",
    price: 888,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);  // in node 'this' refers to empty object, but shows as a window in browser

// function chai(){
//     let username = "vedant"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "vedant"
//     console.log(this.username);
// }


const chai = () => {
    let username = "vedant"
    console.log(this);
}

// chai()

() => {}  // arrow function

// const addTwo = (num1, num2) => {    // basic arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username: "vedantk"})



// console.log(addTwo(3,5));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()