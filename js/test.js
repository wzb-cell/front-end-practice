/*
 * @PackageName:
 * @Description: 测试
 * @Author: Man
 * @Date: 2022-06-14 14:08:51
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-06-28 17:27:38
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
// let pp = new Promise((resolve, reject) => {
//     console.log("1");
//     resolve()
// })
// let pp2 = pp.then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log(2);
//         resolve("resolve")
//     })
// })
// console.log(pp2)
// console.log(测试)
// setTimeout(console.log, 1000, pp2);
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
// var a = 2;

// function foo() {
//     console.log(a); // 会输出2还是3？
// }

// function bar() {
//     var a = 3;
//     foo();
// }

// bar();

function judge(startTime, endTime) {
    // 生成24小时时间区间，跨度为1小时
    let timeArrays = new Array(24)
        .fill(["", ""])
        .map((item, index) => [
            (index < 10 ? "0" + index : index) + ":00",
            (index + 1 < 10 ? "0" + (index + 1) : index + 1) + ":00",
        ]);
    console.log(timeArrays)
    return timeArrays.filter(
        (item) =>
            !(
                (compare(item[0], startTime) && compare(item[0], endTime)) ||
                (compare(startTime, item[1]) && compare(endTime, item[1]))
            )
    );
}
function compare(startTime, endTime) {
    // 将时间转换为分钟，再进行比较
    let startTimes = startTime.split(":");
    let endTimes = endTime.split(":");
    let startTimeVal = startTimes[0] * 60 + Number(startTimes[1]);
    let endTimeVal = endTimes[0] * 60 + Number(endTimes[1]);
    return startTimeVal >= endTimeVal;
}
judge('10:00', '17:00')
