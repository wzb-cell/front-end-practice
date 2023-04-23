/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-03-27 10:08:48
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-04-22 15:58:42
 */
// function* myGenerator() {
//     console.log(yield '1')  //test1
//     console.log(yield '2')  //test2
//     console.log(yield '3')  //test3
//   }
  
//   // 获取迭代器
//   const gen = myGenerator();
  
//   console.log(gen.next())
//   console.log(gen.next('test1'))
//   console.log(gen.next('test2'))
//   console.log(gen.next('test3'))

//   function unique(str) {
//     let arr = eval(str)
//     return Array.from(new Set(arr.flat())).sort((a, b) => b - a)
//   }
//   let strArr = "['1', '2',['1', '0']]"
//   const uniqueArr = unique(strArr)
//   console.log(uniqueArr);

// const arr1 = new Array(2)
// const arr2 = [undefined, undefined]
// const arr3 = Array.apply(null, {length: 2})
// let test = arr1.map((value, index) => {
//   return index;
// })
// let test2 = arr3.map((value, index) => {
//   return index;
// })
// console.log(test);
// console.log(test2);
// console.log(arr2.join('.'));
// console.log(arr1.join('.'));

// var num1 = 0
// function func1 (req1 = 117, req2 = req1 + req3 + num1, req3 = 935){
//   console.log(10)
// } 
// function func2(req1 =  num2){
//   console.log(20)
// }
// func1();
// func2();
// var num2 = 0
// var data = {a:1, b:2, c:3, d:4 }
// console.log(Object.keys(data).filter(function(x){return data[x]>2}))
// function test() {
//   console.log(this.money)
// }
// var personA = new Object;
// personA.money = 10;
// async function test() {
//   console.log(test)
//   const temp = await test2()
//   // console.log('temp:' + temp)
//   console.log('test end')

// }
// async function test2() {
//   console.log(test2)
// }
// test()
// console.log(111)
// new Promise((res, rej) => {
//   console.log('promise')
// }).then((result) => {
//   console.log(result)
// })
// setTimeout(() => {
//   console.log('setTimeout')
// }, 0)
// new Promise((resolve, reject) =>{
//   console.log('promise')
//   throw new Error('测试')
// }).then(result => {
//   console.log(result)
// }).catch((err) =>{
//   console.log('promise error')
//   console.log(err)
//   // throw new Error('promise error')
// }).then(result => {
//   console.log(result + '不需要promise处理就可以进来')
// }).catch(error => {
//   console.log(error)
// })

// 3 7 4  1 2 5 Promise{<resolved: 1>} 
// script start  
// async1
// promise1
// script end 
// async1 end
// async1 success
// 1
// timer2

// const async1 = async () => {
//   console.log('async1');
//   setTimeout(() => {
//     console.log('timer1')
//   }, 2000)
//   await new Promise(resolve => {
//     console.log('promise1')
//   })
//   console.log('async1 end')
//   return 'async1 success'
// } 
// console.log('script start');
// async1().then(res => console.log(res));
// console.log('script end');
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .catch(4)
//   .then(res => console.log(res))
// setTimeout(() => {
//   console.log('timer2')
// }, 1000)
// resolve1
// finally undefined
// timer1
// Promise{<resolved: resolve1>}

async function async1 () {
  await async2();
  console.log('async1');
  return 'async1 success'
}
async function async2 () {
  return new Promise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res => console.log(res)).catch((err) => {
  console.log('test')
  console.log(err)
})