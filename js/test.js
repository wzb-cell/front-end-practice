/*
 * @PackageName: 
 * @Description: 测试
 * @Author: Man
 * @Date: 2022-06-14 14:08:51
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-06-24 17:58:09
 */
// const fs = require("fs");
// //1.封装一个函数 ：  根据文件名生成  文件读取的promise
// function getPromise(fileName) {
//     let p = new Promise((resolve, reject) => {
//         //读文件
//         fs.readFile(`./data/${fileName}.txt`, 'utf-8', (err, data) => {
//             if (err == null) {
//                 //成功
//                 resolve(data);
//             } else {
//                 //失败
//                 reject(err);
//             }
//         });
//     });
//     return p;
// };
// const readFile = async () => {

// const { resolve } = require("path");

    
//     // let data1 = await getPromise('a')
//     // console.log(data1)

//     // let data2 = await getPromise('b')
//     // console.log(data2)

//     //async异步函数的错误信息要用try-catch来捕捉
//     try {
//         let data3 = await Promise.resolve("222222")
//         // console.log(data3)
//         setTimeout(console.log, 0, data3)
//     } catch (err) {
//         console.log(111111)
//         console.log(err)

//     }
// }

// readFile()
// setTimeout(function () {
//     console.log(1);
// });
// new Promise(function(resolve,reject){
//     console.log(2)
//     resolve(3)
// }).then(function(val){
//     console.log(val);
// })
// console.log(4);
// let p = Promise.reject("rejected2222")
// let p2 = p.catch((reason) => {
//     console.log(reason);
//     return Promise.resolve("111111");
// })
// console.log(11111);
// console.log(p2);
// setTimeout(() => {
//     console.log(p2)
// }, 1000);
let pp = new Promise((resolve, reject) => {
    console.log("1");
    resolve()
})
let pp2 = pp.then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
        console.log(2);
        resolve("resolve")
    })
})
console.log(pp2)
console.log(测试)
setTimeout(console.log, 1000, pp2);
// .then((res) => {
//     console.log(2222222)
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log(3);
//         setTimeout(() => {
//             resolve()
//         }, 1000);
//     })
// })