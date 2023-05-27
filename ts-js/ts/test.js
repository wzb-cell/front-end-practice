"use strict";
/*
 * @PackageName:
 * @Description:
 * @Author: Man
 * @Date: 2022-06-20 15:23:48
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2023-04-26 15:36:29
 */
// const reverse = (s) => s.split('').reverse().join('');
// reverse('elon musk'); // -> 'ksum nole'
// console.log(reverse('elon musk'))


let array = [{id: 1,name:'lisi'}, {id: 2, name:'zhangsan'}];
// console.log(array.filter((item) =>{return item.id >1}))
let testID = array.reduce((pre, cur)=>{
    // console.log(pre)
    pre.push(cur.id)
    return pre
}, [])
console.log(testID)

