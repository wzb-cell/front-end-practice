/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-23 21:48:42
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-23 22:07:32
 */

const mySetTimeout = function (fn, delay) {
    const timer = setInterval(() => {
        fn()
        clearInterval(timer)
        console.log('定时器清除成功')   
    }, delay)
}

mySetTimeout(function() {console.log(222)}, 1000)