

function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // console.log("Vedant");  // anything after return will not execute

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


// function loginUserMessage(username){
//     if (username === undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage2 (username = "ved"){
        if (username === undefined) {
            console.log("please enter a username");
            return
        }
        return `${username} just logged in`
    }


console.log(loginUserMessage2());


function loginUserMessage(username){
        if (!username) {
            console.log("please enter a username");
            return
        }
        return `${username} just logged in`
    }
    



// console.log(loginUserMessage("vedant")); 
// console.log(loginUserMessage()); 
