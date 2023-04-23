/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-10-13 15:18:06
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-02-07 15:38:54
 */
// var data = [];

// for (var i = 0; i < 3; i++) {
//     (function(){
//         data[i] = i
//         console.log(i);
//     })()
// }
// console.log(data[0]);
// console.log(data[2]);
// data[0]();
// data[1]();
// data[2]()
const arr = [1, 2, 3]
arr.reduce((pre, cur) => pre.then(() => new Promise(r =>setTimeout(() => {
    r(console.log(cur))
}, 1000))), Promise.resolve())