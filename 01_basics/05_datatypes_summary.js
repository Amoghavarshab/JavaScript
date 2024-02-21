// Primitive DataType(call by)

//7 types : String , Number,boolean,null,undefined,Symbol,BigInt

// is JS statically typed or Dynamically Types?
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;(undefined)

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

//const bigNumber=123143234234234212342145535n

// Reference type (Non-Primitive)

//Array, Objects, Functions

const heros=["shaktiman","ironman","batman"];
let myObj={
    name:"amogh",
    age:21,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */