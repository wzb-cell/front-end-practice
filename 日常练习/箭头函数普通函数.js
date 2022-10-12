/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-10-11 14:43:53
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-10-12 16:00:23
 */
let fn = (name) => {
    console.log(name)
}
let fn2 = function(name) {
    console.log(name)
}
console.dir(fn)
console.dir(fn2)
var name = '南玖'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('nan')
var person2 = new Person('jiu')

person1.foo1() // 'nan'
person1.foo1.call(person2) // 'jiu'

person1.foo2() // 'nan'
person1.foo2.call(person2) // 'nan'

person1.foo3()() // '南玖'
person1.foo3.call(person2)() // '南玖'
person1.foo3().call(person2) // 'jiu'

person1.foo4()() // 'nan'
person1.foo4.call(person2)() // 'jiu'
person1.foo4().call(person2) // 'nan'