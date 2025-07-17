const arr = [2, 4, 2, 1, 4]
console.log(arr);// array datatype is object

// Array makes shallow copy not deep copy,copy whose properties share same reference as those of the source object , it means the change will reflect to the original array 

const myArr = new Array(1, 2, 3, 4)
myArr.push(5)//insert element at end
console.log(typeof arr);

console.log(typeof myArr);
myArr.pop()//remove last ele of array
console.log(myArr)

myArr.unshift(78)//insert at 1st position of array
console.log(myArr);

myArr.shift()//removes 0'th  ele
console.log(myArr);

const arr1 = new Array(1, 6, 4, 8, 0)
console.log("A ", arr1);

const newArr = myArr.join();
console.log(typeof newArr); //string









