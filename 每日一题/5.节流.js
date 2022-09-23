/*
 * @PackageName: 
 * @Description:  
 * @Author: Man
 * @Date: 2022-09-20 20:51:26
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-20 21:15:22
 */

/**
 * 节流函数（首节流），函数只在指定的时间执行一次，首次会立即执行，之后在规定的时间间隔内执行
 * @param {需要节流的函数} fn 
 * @param {节流中的时间间隔} delay 
 * @returns 
 */
 function throttle_first(fn, delay) {
    let pre = null
    return function() {
        let args = arguments
        let now = Date.now()
        if(now - pre >= delay){
            fn.apply(this, args)
            pre = now
        }
    }
}
/**
 * 节流函数（尾节流），函数只在指定的时间执行一次，首次不会执行，只会在之后执行
 * @param {需要节流的函数} fn 
 * @param {节流中的时间间隔} delay 
 */
function throttle_end(fn, delay) {
    let timer = null
    return function () {
        let args = arguments
        if(timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}

/**
 * 时间戳 & 定时器
 * @param {需要节流的函数} fn 
 * @param {节流中的时间间隔} delay 
 */

function throttle(fn, delay) {
    // 初始化定时器
    let timer = null;
    // 上一次调用时间
    let prev = null;
    // 返回闭包函数
    return function () {
      // 现在触发事件时间
      let now = Date.now();
      // 触发间隔是否大于delay
      let remaining = delay - (now - prev);
      // 保存事件参数
      const args = arguments;
      // 清除定时器
      clearTimeout(timer);
      // 如果间隔时间满足delay
      if (remaining <= 0) {
        // 调用fn，并且将现在的时间设置为上一次执行时间
        fn.apply(this, args);
        prev = Date.now();
      } else {
        // 否则，过了剩余时间执行最后一次fn
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay);
      }
    }
  }
  