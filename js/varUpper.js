/*
 * @PackageName: 
 * @Description: 测试模块
 * @Author: Man
 * @Date: 2022-07-01 11:20:55
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-07-02 19:06:48
 */
function foo(){
    var something = "foo";
    var another = [1,2,3]
    function doSomething() {
        console.log(something)
    }
    function doAnother(){
        console.log(another.join("!"))
    }
    return {
        doSomething:doSomething,
        doAnother: doAnother
    }
}
var fool = foo();
fool.doAnother()
console.log(fool.another)