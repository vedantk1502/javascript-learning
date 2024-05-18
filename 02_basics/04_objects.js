// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Ved"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ved@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vedant",
            lastname: "kulkarni"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 5: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "v@mail.com"
    },
    {

    },
    {

    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));