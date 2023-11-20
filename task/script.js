// task1
// const obj = {
//   name: "aysel",
//   surname: "tahirova",
//   age: 19,
// };
// console.log(obj.name);
// console.log(obj.age);

//task2
// const obj2 = {
//   name: "aysel",
//   surname: "tahirova",
//   age: 19,
// };

// let copy = { ...obj2 };
// console.log(copy);

//task3
// const obj3 = {
//   name: "aysel",
//   surname: "tahirova",
//   age: 19,
// };
// const newObj = { ...obj3 , age:20};
// console.log(newObj);

//task4
//custom foreach
// const arr = [1, 2, 3, 4, 5, 6];
// function foreach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }
// foreach(arr, (x) => console.log(x));

//custom map
// const arrmap = [1, 2, 3, 4, 5, 6];
// function map(arrmap, cb) {
//   const newArr = [];
//   for (let i = 0; i < arrmap.length; i++) {
//     newArr.push(cb(arrmap[i]));
//   }
//   return newArr;
// }
// console.log(map(arrmap, (x) => x));

//custom filter
// const arr2 = [1, 2, 3, 4, 5, 6];
// function filter(arr2, cb) {
//   const newArr = [];
//   for (let i = 0; i < arr2.length; i++) {
//     if (cb(arr2[i])) {
//       newArr.push(cb(arr2[i]));
//     }
//   }
//   return newArr;
// }
// console.log(filter(arr2, (x) => (x % 2 === 0 ? x : null)));

//custom findindex
// const arr1 = [1, 2, 3, 4, 5, 6];
// function findindex(arr1, cb) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (cb(arr1[i])) {
//       return i;
//     }
//   }
//   return -1
// }
// console.log(findindex(arr1, (x)=>(x % 2 === 0 ? x : null)));

//custom find
// const arr3 = [1, 2, 3, 4, 5, 6];
// function find(arr3, cb) {
//   for (let i = 0; i < arr3.length; i++) {
//     if (cb(arr3[i])) {
//       return arr3[i];
//     }
//   }
// }
// console.log(find(arr3, (x)=>(x % 2 === 0 ? x : null)));

//custom includes
// const arr4=[1,2,3,4,5,6]
// function includes(arr4, item) {
//     for (let i = 0; i < arr4.length; i++) {
//       if (arr4[i]===item) {
//         return true
//       }
//     }
//     return false
// }


