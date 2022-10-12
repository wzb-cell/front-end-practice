/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-27 22:14:16
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-27 22:33:53
 */
const getObjLevel = function(obj) {
    let num = 1
    const computed = (obj, level = 0) =>{
        if(typeof obj === 'object' && obj !== null) {
            Object.values(obj).forEach((value) => {
                if(typeof value === 'object' && value !== null) {
                    computed(value, level+1)
                }else {
                    num = level+1 > num ? level+1 :num
                }
            })
        }else {
            num =  level > num ? level : num
        }
    }
    computed(obj)
    return num
}
let obj = {a:[1,2], b: '1' }
console.log(getObjLevel(obj))
