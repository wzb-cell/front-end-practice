const { access } = require("fs")

/*
 * @PackageName: 
 * @Description:
 * @Author: Man
 * @Date: 2022-07-08 09:32:28
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-07-08 11:00:06
 */
const arr2 = [
    [1,2],
    [3,4],
    [5,6]
]
console.log(arr2.reduce((acc,cur)=>{
    return acc.concat(cur)
},[]))

const chunk = (arr, size) => {
    return arr.reduce(
     (res, cur) => {
      res[res.length - 1].length < size
       ? res[res.length - 1].push(cur)
       : res.push([cur]);
       return res
    },
     [[]]
    );
   };
   const arr4 = [1, 2, 3, 4, 5, 6];
   console.log(chunk(arr4, 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
   const  test = (a)=>(a,2,3)
   console.log(test(4))