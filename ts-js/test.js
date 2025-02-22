"use strict";
/*
 * @PackageName:
 * @Description:
 * @Author: Man
 * @Date: 2022-06-20 15:23:48
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2023-04-24 14:57:24
 */
const reverse = (s) => s.split('').reverse().join('');
reverse('elon musk'); // -> 'ksum nole'
console.log(reverse('elon musk'));
let str = "jimmy";
let num = 24;
let bool = false;
let u = undefined;
let n = null;
let obj = { x: 1 };
let big = 100n;
let sym = Symbol("me");
console.log(obj);
let arr3 = [{ name: 'jimmy', age: 22 }];
console.log(arr3);
// 相当于声明了一个字符串类型的数组
let chars = ['A', 'B'];
console.log(chars);
console.log(chars[1]);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Semlinker', ' Kakuqo');
const result2 = add(1, 2);
console.log(result.split(' '));
// console.log(result2.split(' '))
// let lowerCaseObject: object;
// lowerCaseObject = 1; // ts(2322)
// lowerCaseObject = 'a'; // ts(2322)
// lowerCaseObject = true; // ts(2322)
// lowerCaseObject = null; // ts(2322)
// lowerCaseObject = undefined; // ts(2322)
// lowerCaseObject = {}; // ok
const arrayNumber = [1, 2, 3, 4];
const greaterThan2 = arrayNumber.find(num => num > 2);
console.log(greaterThan2);
function myFunc(numGenerator) {
    // Object is possibly 'undefined'.(2532)
    // Cannot invoke an object which is possibly 'undefined'.(2722)
    //   const num1 = numGenerator(); // Error
    const num2 = numGenerator(); //OK
    console.log(num2);
}
myFunc(function () { return 1; });
const myname1 = 'clz';
const myname2 = 123;
const myname3 = true;
const myname4 = {
    name: 'clz'
};
const test2 = { name: '1' };
console.log(typeof test2);
// type exampleType2 = exampleType1 & {
//     name: number
// }
//# sourceMappingURL=test.js.map