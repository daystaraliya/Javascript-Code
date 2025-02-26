const coding = ["JS" , "CPP" ,"JAVA" , "PY"]

// coding.forEach(function (val) {//this is call back function,so function will be unamed
//     console.log(val);
    
// })

// coding.forEach( (item) => {
//         console.log(item);
        
// })
const myCoding = [
    {
        languageName :"JS",
        languageFileName :"JS.js"
    },
    {
        languageName :"python",
        languageFileName :"python.py" 
    },
    {
        languageName :"Java",
        languageFileName :"Java.java"
    }
    
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})