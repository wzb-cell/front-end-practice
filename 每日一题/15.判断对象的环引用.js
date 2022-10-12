/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-27 21:26:25
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-27 21:54:09
 */
const cycleDetector = (obj) => {
    const arr = [obj]
    let flag =  false
    const cycle = (o) => {
        const values = Object.values(o)
        console.log(values)
        for(let value of values) {
            if(typeof value === 'object' && value !== null) {
                if(arr.includes(value)) {
                    flag = true
                    return 
                }
                arr.push(value)
                cycle(value)
            }
            
        }
    }
    cycle(obj)
    return flag
}
function cycle(obj, parent) {
    //表示调用的父级数组
    var parentArr = parent || [obj];
    for (var i in obj) {
        if (typeof obj[i] === "object") {
            //判断是否有循环引用
            parentArr.forEach((pObj) => {
                if (pObj === obj[i]) {
                    obj[i] = "[cycle]"
                }
            });
            cycle(obj[i], [...parentArr, obj[i]])
        }
    }
    return obj;
}

let obj = {'a': '西瓜'}
obj.info = obj
let obj2 = {'a': obj}
let testObj = {'a':1,'b':obj}
// console.log(cycleDetector(obj))
// console.log(cycle(obj));
for (let i of obj){
    console.log(i);
}