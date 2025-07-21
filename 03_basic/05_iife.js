//basic syntax of iife(used to imieditatly execute)
//why iife is used - 1. Encapsulation and avoiding global scope pollution 2 executing code immidietly
(function user() {//This is Named IIFE-immiadietly  invoked function

    console.log(`DB Connected`);

})(); // u need to put ; then the next iife will run otherwise it will give error

//to write two IFFE you have to terminate by semicolon above IFFE otherwise it'll give error
//to run below code ,you ve to terminate above function
((name) => {//simple/unamed IIFE
    console.log(`DB CONNECTED TO ${name}`);

})("Aliya")

