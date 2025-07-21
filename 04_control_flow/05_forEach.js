const coding = ["JS", "CPP", "JAVA", "PY"]

// coding.forEach(function (val) {//this is call back function,so function will be unamed
//     console.log(val);

// })

// coding.forEach( (item) => {
//         console.log(item);

// })

//for each loop on object of array
const myCoding = [
    {
        languageName: "JS",
        languageFileName: "JS.js"
    },
    {
        languageName: "python",
        languageFileName: "python.py"
    },
    {
        languageName: "Java",
        languageFileName: "Java.java"
    }

]

const value = myCoding.forEach((item) => {
    console.log(item.languageFileName);

})

console.log(value); // for each value don't return anything that'swhy it will give "undefined"
