//  Immediately Invoked Fuction Expression (IIFE)
//To remove  Pollution from global scope 


(function coffee (){

    // named IIFE
    console.log(`DB Connected`);
    
})();

( (name)=>{
    console.log(`DB Connected to ${name}`);
    
}
 )('Mayank')

























