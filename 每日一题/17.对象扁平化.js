/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-10-13 15:42:51
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-10-13 17:05:04
 */
const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]'
const flatten = obj => {
    let res = {}
    // 递归结束口
    if(!(obj instanceof Object)) return
    const dfs = (cur, prefix)=>{
        //先判断是否为对象，如果是对象，需要在判断是数组还是对象
        if(cur instanceof Object){
            if(Array.isArray(cur)){
                for(let i in cur){
                    dfs(cur[i], `${prefix}[${i}]`)
                }
            }else {
                for(let key in cur){
                    dfs(cur[key], `${prefix}${prefix?'.':''}${key}`)
                }
            }
            // 如果不是对象，数据直接存入就可以了
        }else {
            res[prefix] = cur
        }
    }
    dfs(obj, '')
    return res
}
const obj = {
    a: 1,
    b: [1, 2, { c: true }],
    c: { e: 2, f: 3 },
    g: null,
  };
  console.log(flatten(obj))