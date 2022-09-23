/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-20 17:20:24
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-20 19:36:32
 */
let arr = [1, 2, 3, 4, 5, 6];
const shuffle3 = (arr) => { 
    let i = arr.length-1;
    while (i) { 
        let j = Math.floor(Math.random() * i--);
        console.log(j,i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr 
}
console.log(shuffle3(arr));