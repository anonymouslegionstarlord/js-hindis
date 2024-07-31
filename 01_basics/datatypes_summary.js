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

// stack (primitive), Heap (Non primitive)

let myyoutubename= "mayankdotcom"

let anothername = myyoutubename
anothername ="starlord"

console.log(myyoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo =userOne
userTwo.email = "mayank@google.com"
console.log(userOne.email);
console.log(userTwo.email);