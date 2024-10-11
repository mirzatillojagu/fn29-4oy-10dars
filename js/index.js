

///////////////////////Sodda masalalar/////////////////////////

//length//
// 1
// let arr = [ 1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr.length);
// }

// 3
// let arr = [ 1, 7, 3, 4, 5, 6];
// let max=0;
// for(let i = 0; i < arr.length; i++){
//     if (max < arr.length) {
//       max = arr[i];
//     }
// }
// console.log(max);

///Concat///
// 1
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let res = arr1.concat(arr2);
// console.log(res);

// 2
// let arr1 = ['sa'];
// let arr2 = ['lo'];
// let arr3 = ['m']
// let res = arr1.concat(arr2, arr3);
// console.log(res.join(''));

// 3
// let arr1 = [1, 2];
// let arr2 = [5];
// arr2.push(2)
// let res = arr1.concat(arr2);
// console.log(res);

///Includes///

// 1
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.includes(5));

// 2
// let arr = [1, "a", 3, 4, "salom"];

// console.log(arr.includes("salom"));

// 4. IndexOf, LastIndexOf

// 1
// let arr = [1, 4, 2, 3, 4, 5];
// console.log(arr.indexOf(4));
// console.log(arr.lastIndexOf(4));

// 2
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.lastIndexOf(6));

// 5. Sort

// 1
// let arr = [1, 2, 3, 4, 5];

// arr.sort(function(a, b){
//     return a - b
// })
// console.log(arr);

// 2
// let arr = ['Elbek', 'Aziz', 'Sardor',];
// arr.sort()
// console.log(arr);

// 3
// let arr = [1, 2, 3, 4, 5];

// arr.sort(function(a, b){
//     return b - a
// })
// console.log(arr);

// 6. Reverse

// 1
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// 7. ToString

// 1
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

// 2
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

// 3
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

// 8. Join

// 1
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join("-"));

// 2
// let arr = ["salom", "anaqa"];
// console.log(arr.join(""));

// 3
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join("|"));

// 9 Push, Shift

// 1
// let arr = [1, 2, 3, 4, 5];
// arr.push("69")
// console.log(arr);

// 2
// let arr = [1, 2, 3, 4, 5];
// arr.shift()
// console.log(arr);

// 3
// let arr = [1, 2, 3, 4, 5];
// arr.push("101")
// arr.push("11")
// arr.push("69")
// arr.shift();
// console.log(arr);

// 10 Unshift, Pop

// 1
// let arr = [1, 2, 3, 4, 5];
// arr.unshift("12");
// console.log(arr);

// 2
// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);

// 3
// let arr = [1, 2, 3, 4, 5];
// arr.unshift("69");
// arr.push("45");
// arr.shift();
// arr.pop();
// console.log(arr);

/////////////////Qiyinroq masalalar/////////////////


// 1
// let arr = [1, 3, 5, 7, 9];

// arr.splice(2, 1);

// console.log(arr);


// 7
// let arr = ["salom"]
// let arr1 = ['xayr']
// let arr2 = ["ewfewd"]

// let res = arr.concat(arr1, arr2)

// console.log(res.join("-"));


// 8
// let arr = [1, 3, 5, 7, 9];
// arr.pop()
// arr.shift()
// console.log(arr.join(":"));


// 9
// let arr = [1, 3, 5, 7, 9];
// arr.push(10);
// arr.unshift(0)

// arr.sort(function(a,b){
//     return a-b
// })
// arr.splice(0,4)

// console.log(arr);


// 10
// let arr = [1, 2, 3, 4, 5, 7, 9, 10];
// arr.splice(0, 2)
// arr.splice(4, 3)

// console.log(arr);
