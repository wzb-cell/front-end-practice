/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-20 16:48:38
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-20 19:41:48
 */

// 方法1
const shuffle = (arr) => {
    return arr.sort(() => {
        return Math.random() > 0.5 ? 1 : -1
    })
}

// 方法2 需要注意用数组解构的方式，前面的分号问题
const shuffle3 = (arr) => { 
    let i = arr.length-1;
    while (i) { 
        let j = Math.floor(Math.random() * i--); //注意前面的分号
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr 
}
const result = [1, 2, 3, 4, 5, 6]
console.log(shuffle3(result))