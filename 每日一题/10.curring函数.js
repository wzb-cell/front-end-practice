const { all } = require("micromatch")

/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-23 22:45:05
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-23 22:54:27
 */
const add = (a, b, c) => a + b + c
const curring = (fn, ...args) => {
    let allArgs = [...args]
    console.log(fn.length)
    // 取函数形参的长度
    let num = fn.length
    const res = (...args2) =>{
        allArgs = [...allArgs, ...args2]
        if(allArgs.length === num){
            return fn(...allArgs)
        }else {
            return res
        }
    }
    return res
}
const addcurring  = curring(add, 1)
console.log(addcurring(2)(3))
