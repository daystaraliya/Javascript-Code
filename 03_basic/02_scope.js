
if(true){
    //let a = 10
    const b=20
    var c= 30
}
//console.log(a);//a scope is under {},this act as global scope
//console.log(b);//b scope is under {}
//console.log(c);//but c scope is not under {},but this will act as block scope
function one() {
    const username = "aliya"
    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);//it's scope is only under {} of two
    two()
}
one()