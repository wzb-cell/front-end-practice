/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-07-10 14:46:45
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-07-10 14:46:47
 */

const obj = {
    nan:NaN,
    infinityMax:1.7976931348623157E+10308,
    infinityMin:-1.7976931348623157E+10308,
    undef: undefined,
    fun: () => { console.log('叽里呱啦，阿巴阿巴') },
    date:new Date,
}
const result = JSON.parse(JSON.stringify(obj))
console.log(result);