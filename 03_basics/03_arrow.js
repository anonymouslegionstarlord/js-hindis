const user={
    username: "MAyank",
    price:999,
    
    welcomeMessage :function () {
        console.log(`${this.username}, welcome to site`);
        console.log(this);
        
        
        
    }
}

// user.welcomeMessage()
// user.username="Rock"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="Mayank"
//     console.log(this.username);
    
// }

// chai()

// const chai = ()=>{
//     let username ="Mayank"
//     console.log(this);
// }
// chai()
// const addTwo = (num1, num2)=>  num1 +num2
// const addTwo = (num1, num2)=>  (num1 +num2)

const addTwo = (num1, num2)=>  ({username: "Mayank"})



console.log(addTwo(3,4))

const myArray =[2,4,5,6,7]

myArray.forEach()
















