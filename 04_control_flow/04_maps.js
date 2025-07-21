//map is object type 

const map = new Map()//it'll take key value pair and key will be unique
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('IN', "Maxico")//It will ignore this insertion
//console.log(map);
// for (const key of map) {
//     //console.log(key);

// }
for (const [key, value] of map) {
    console.log(key, ':-', value);//to print key and value separately

}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const result = nums.map((val) => val + 1);
//console.log(result);

//chainig on map
const ans = nums.map((num) => num + 1).map((num) => num + 2).filter((num) => num > 9)
console.log(ans);
