// singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vedant",
    "full name": "Vedant Kulkarni",
    [mySym]: "mykey1",
    age: 25,
    location: "Nanded",
    email: "vedant@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

// JsUser.email = "kulkarni@google.com"
// Object.freeze(JsUser)
// JsUser.email = "ved@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log("Hello JS user, ${this.name}");
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
