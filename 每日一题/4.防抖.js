/**
 * 在间隔时间内触发，将重新计时
 * @param {防抖的函数} fn 
 * @param {允许抖动的时间} delay 
 * @returns 
 */

// 异步请求防抖，不能通过防抖实现，因为如果对异步进行防抖，请求和结果可能会错乱，导致显示有问题，所以async，await方式进行同步操作，可以使用防抖
function debounce(fn, delay) {
    // timer 存储定时器
    let timer = null
    // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器
    return function() {
        let arg = arguments
        // 在抖动的时间内，清除定时器
        if(timer) {
            clearTimeout(timer)
        }
        // 开启这一次的定时器
        timer = setTimeout(() => {
            fn.apply(this, arg);
        }, delay)
    }
}