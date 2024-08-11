// singleton 
// object.create
//object literals

const mySym = Symbol("key1")



const JsUser ={
    name: "Mayank",
    "full name":"Mayank Dubey",
    [mySym] :"mykey1",
    age : 18, 
    location : "Kanpur",
    email : "mayank@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "mayank@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "mayank@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




