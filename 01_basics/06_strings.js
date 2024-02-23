const name="amogh"
const repoCount=50

//console.log(name+repoCount+"Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//string interpolation

const gameName=new String('amogha-varsha-B')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   amogh   "
console.log(newStringOne);
console.log(newStringOne.trim());
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url="hrrps://amogh.com/amogh%20varsha"

console.log(url.replace('%20','-'));

console.log(url.includes('amogh'));

console.log(gameName.split('-'));