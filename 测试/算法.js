/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-04-07 22:28:06
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-04-07 22:35:30
 */
const arrNum = [1, [2, 3], [4, [5, 6, 7]]]
//第一种递归实现
function flattenLoop(arr, level = 1) {
  let result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && level > 0) {
        result = result.concat(flattenLoop(arr[i], level - 1))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
console.log(flattenLoop(arrNum, 2)) //  [1, 2, 3, 4，5, 6, 7]

let arr = [1, [2, [3, 4]]];
function flatten(arr, level) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) && level > 0 ? flatten(next, level - 1) : next)
    }, [])
}
console.log(flatten(arr, 3));//  [1, 2, 3, 4，5]
