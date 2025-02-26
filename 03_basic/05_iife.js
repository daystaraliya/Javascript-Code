//basic syntax of iife(used to imieditatly execute)
(function user() {//Named IIFE

    console.log(`DB Connected`);
    
})();
//to write two IFFE you have to terminate above IFFE otherwise it'll give error
//to run below code ,you ve to terminate above function
((name) => {//simple/unamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
    
})("Aliya")

