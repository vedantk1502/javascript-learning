

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


// console.log(loginUserMessage2());


function loginUserMessage(username){
        if (!username) {
            console.log("please enter a username");
            return
        }
        return `${username} just logged in`
    }
    



// console.log(loginUserMessage("vedant")); 
// console.log(loginUserMessage()); 


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartPrice2(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice2(200, 400, 500, 2000));


const user = {
    username: "vedant",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
    username: "ved",
    prices: 499
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));