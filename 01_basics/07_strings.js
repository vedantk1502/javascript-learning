const name = "Vedant"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Outdated method

// console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String("vedant-hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne ="   vedd   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vedant.com/home%20page"

console.log(url.replace('%20', '-'));
console.log(url.includes('vedant'));

console.log(gameName.split('-'));