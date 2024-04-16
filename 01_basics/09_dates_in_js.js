// Date
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString);
// console.log(typeof myDate);

let myCreateDate = new Date(2024, 2, 15)
let myCreateDate2 = new Date(2024, 2, 15, 5, 3)
let myCreateDate3 = new Date("2023-02-15")
let myCreateDate4 = new Date("02-15-2000")
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate2.toDateString());
// console.log(myCreateDate3.toDateString());
// console.log(myCreateDate4.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

let final = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(final);