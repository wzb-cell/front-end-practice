/*
 * @PackageName: 
 * @Description:  
 * @Author: Man
 * @Date: 2022-07-03 10:10:42
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-07-08 09:31:39
 */
// function identify(context){
//     return context.name.toUpperCase()
// }

// function speak(context){
//     var greeting = "hello,i'm"+identify(context)
//     console.log(greeting)
// }

// var me = {
//     name:"Kyle"
// }

// var you = {
//     name:"Reader"
// }

// console.log(identify(you))
// speak(me)
// function foo(num){
//     console.log("foo:"+ num);
//     count = 1;
// }

// foo.count = 3;

// var i;
// for(i=0;i<10;i++){
//     if(i>5){
//         foo(i)
//     }
// }
// console.log(count)
// console.log(foo.count)
 var myObject = {}
 myObject[true] = "foo"
 myObject[3] = "bar"
 myObject[myObject] = "baz"

 console.log(myObject["true"])
 console.log(myObject["3"])
 console.log(myObject["[object Object]"])