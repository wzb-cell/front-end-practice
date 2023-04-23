/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-20 17:20:24
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-12-14 11:39:12
 */
let arr = [1, 2, 3, 4, 5, 6];
const shuffle3 = (arr) => { 
    let i = arr.length-1;
    while (i) { 
        let j = Math.floor(Math.random() * i--);
        console.log(j,i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr 
}
console.log(shuffle3(arr));
debugger;

var t = null;
var replaceThing = function() {
  var o = t
  var unused = function() {
    if (o) {
      console.log("hi")
    }
    console.log(1111)        
  }
  unused()
  t = {
        longStr: new Array(100000).fill('*'),
        someMethod: function() {
                       console.log(1)
                    }
      }
}
replaceThing()