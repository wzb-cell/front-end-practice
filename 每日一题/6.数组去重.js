/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-22 14:36:04
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2023-04-10 16:15:46
 */

const quchong = (arr) => {
    return [...new Set(arr)]
}

const quchong2 = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.includes(cur) ? pre : pre.concat(cur) 
        // return pre.includes(cur) ? pre : [...pre, cur]
    }, [])
}


const quchong3 = (arr) => {
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index
    })
}
let arr = [1, 1, '1', '1', 2, 3]

console.log(quchong(arr))
console.log(quchong2(arr))
console.log(quchong3(arr))