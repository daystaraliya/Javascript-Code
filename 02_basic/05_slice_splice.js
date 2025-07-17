const arr1 = [1, 2, 3, 4, 5, 6, 2];

const slicedarr1 = arr1.slice(1, 4);
console.log("sliced Portion", slicedarr1);
console.log("Array After sliced : ", arr1);//array will be same
console.log(typeof arr1);


const arr2 = [1, 3, 2, 4, 0, 9, 8, 4];
const splicedarr2 = arr2.splice(1, 4);
console.log("Spliced Portion", splicedarr2);//the array will be changed ,it means array manipulation occure,it remove ele of range(1,3) from original array
console.log("Array after spliced", arr2);
console.log(typeof arr2);




