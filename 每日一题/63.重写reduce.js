/*
 * @PackageName: 
 * @Description: 重写reduce
 * @Author: Man
 * @Date: 2022-10-26 14:51:45
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-10-26 14:56:46
 */
Array.prototype._reduce = function(exce, initial = 0){
    let result = 0
    this.forEach((item, index, arr) => {
        result = exce(result, item, index, arr)
    })
    return result
}
const b = [1, 3, 4, 5, 6, 2, 5, 1, 8, 20]
console.log(b.reduce((pre, cur) => pre + cur , 0));
console.log(b._reduce((pre, cur) => pre + cur, 0));