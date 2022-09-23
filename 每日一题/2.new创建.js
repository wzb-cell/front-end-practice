/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-19 19:59:11
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-20 16:48:18
 */
function myNew(fn, ...args) {
    const obj = {}

    obj.__proto__ = fn.prototype

    fn.apply(obj, args)

    return obj
}

var name = "windowsName";
function func1() {
    console.log("测试")
}
var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)     
    },

    func2: function () {
        setTimeout(  function () {
            this.func1()
            function func1() {
                console.log("测试")
            }
        },100 );
    }

};

a.func2()     // this.func1 is not a function