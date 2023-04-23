/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-03-31 16:41:29
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-03-31 16:48:02
 */
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // throw new Error('nono') //这里主动抛出错误
        resolve()
    }, 500);
})
    .then(()=>{
        console.log(2)
        throw new Error('错误')
    },(err)=>{
        console.log(1) //这里是reject时应该调用的函数，但是这里并没有执行，只会在控制台报错
        console.log(err) //根本不执行这里
    })
    .catch((err)=>{
        console.log(2333) //这里catch都不执行
        console.log(err)
    })