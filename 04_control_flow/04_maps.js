const map = new Map()//it'll take key value pair and key will be unique
map.set('IN' , "India")
map.set('USA' , "America")
map.set('FR' , "France")
map.set('IN' , "Maxico")//It will ignore this insertion
//console.log(map);
// for (const key of map) {
//     //console.log(key);
    
// }
for (const [key , value] of map) {
    console.log(key , ':-' , value);//to print key and value separately
    
}
