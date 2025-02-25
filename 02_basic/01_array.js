const arr = [2,4,2,1,4]
console.log(arr);

const myArr = new Array(1,2,3,4)
myArr.push(5)
console.log(myArr);
myArr.pop()//remove last ele of array
console.log(myArr)

myArr.unshift(78)//insert at 1st position of array
console.log(myArr);

myArr.shift()//removes 0'th  ele
console.log(myArr);

const arr1 = new Array(1,6,4,8,0)
console.log("A " , arr1);

const arr2 = arr1.slice(1,3)
console.log(arr2)
//const arr3 = arr1.splice(1,3)//it includes last index and manipulates array,it remove ele of range(1,3) from original array
console.log(arr3)
console.log(arr1);








