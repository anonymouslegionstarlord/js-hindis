const promiseone = new Promise(function(resolve,reject){
    // Do an async task
    // DB Calls , Cryptography,networkcalls

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})
// resolve and .ten are connected .then has callback
promiseone.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function () {
    console.log("Async task 2");
    resolve()  
    },1000)
}).then(function(){
    console.log("Aysnc 2 resolved");
    
})

const Promisethree = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({
            username:"Mayank", email:"mk@gmai.com"
        })
        
    },1000)
})

Promisethree.then(function(user){
    console.log(user);
    
})


const promisefour= new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"MAyank",password:"123"})
            
        }
        else{
            reject('Error:This is undefined')
        }
        
    },1000)
    
})

promisefour

.then((user)=>{
    console.log(user);
    return user.username
    
})

.then((username)=>{
    console.log(username);
    
})

.catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("Finally rej or res");
    
})


const promisefive= new Promise (function (resolve,reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username:"Javascript",password:"123"})
            
        }
        else{
            reject('Error:Js is undefined')
        }
        
    },1000)
    
    
})
async function consumePromisefive() {
    // const response = await promisefive
    // console.log(response);
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(Error);
        
    }
    
    
}

consumePromisefive()


// async function getallusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         // console.log(response);
        
//        const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",Error);
        
//     }
    
// }

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()  // When one then completes then only Second then executes easy than catch and try block
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(Error))






// getallusers()


























