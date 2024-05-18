// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "vedant"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "vedant"
    if (username === "vedant"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

// addone(5) This will not give any error because function can be called before declaration
console.log(addone(5));

function addone(num){
    return num + 1
}

// addTwo(5) This gives error because variable can't be called before declaration

const addTwo = function(num){
    return num + 2
}

addTwo(5)