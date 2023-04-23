/*
 * @PackageName: 
 * @Description: 重写Array
 * @Author: Man
 * @Date: 2022-10-26 09:45:05
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-10-26 09:50:06
 */

Array.prototype._map = function(exec) {
    const result = []
    this.forEach((item, index, arr)=> {
        result[index] = exec(item, index, arr)
    })
    return result
}

const a = new Array(2).fill(2)
console.log(a.map((item, index, arr) => item * index + 1)) // [1,3]
console.log(a._map((item, index, arr) => item * index + 1))// [1,3]