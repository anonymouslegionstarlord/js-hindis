//  Primitive - call by value

//  7 types : String ,Number , Boolean ,Null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

// const bigNumber = 345678947561646355661n



//  Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktimaan" , "koito" , "kyakre"]
let myObj={
    name:"mayank",
    age:22
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof anotherId);