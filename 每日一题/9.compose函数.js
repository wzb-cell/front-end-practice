const { memoryUsage } = require("process")

/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-23 21:01:52
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-23 21:14:07
 */
const compose = function() {
    let args  = [].slice.call(arguments)
    return function(x) {
        return args.reduceRight(function(res, cur_callback){
            return cur_callback(res)
        }, x)
    }
}
let add = X => X+10;
let multiply = y => y*10;
let calculate = compose(add, multiply, add)
console.log(calculate(10));