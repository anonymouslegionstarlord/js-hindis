const coding = ["js","ruby","java","python"]

// coding.forEach( function (val) {
//     console.log(val);
    
// }  )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

function printMe(item){
    // console.log(item);
    
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const myCOding =[
    {
        languageName:"JAvascript",
        languageFilename:"Js"
    },
    {
        languageName:"JAva",
        languageFilename:"Java"
    },
    {
        languageName:"Python",
        languageFilename:"Py"
    }
]
myCOding.forEach ((item) => {

console.log(item.languageName);

}
)



