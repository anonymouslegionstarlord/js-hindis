const userEmail =[] //Truth Values

if (userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}

// Falsy values 
// false, 0 ,-0, BigInt 0n, "",null,undefined,NaN


// Truthy Values
// "0",'false',"",[],{}, function(){} - empty function

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
    
// }
 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
 }

// Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5??10
// val1 = null??10
var1 = undefined ?? 15
val1 = null ??10?? 20

console.log(val1);


// ?? - Safety check operator

// Terniary Operator

// condition ? true :false


const iceTeaPrice= 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("More than 80");
;










