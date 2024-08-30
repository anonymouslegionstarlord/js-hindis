//  for of

// ["", "",""]
// [{},{},{}]

const arr = [ 1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings ="Hello Everyone "

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
    
    // Maps

    const map =new Map()
    map.set('IN',"India")
    map.set('USA',"United States of America")
    map.set('NK',"North Korea")


// console.log((map));

for (const key of map) {
    console.log(key);
    
    
}
                   
