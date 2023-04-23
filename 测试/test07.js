// 并发请求函数
const concurrencyRequest = (urls, maxNum) => {
    // 因为测试代码调用concurrencyRequest后需要返回一个Promise
     return new Promise((resolve) => {
          // urls的长度为0时，results就没有值，此时应该返回空数组
         if (urls.length === 0) {
             resolve([]);
             return;
         }
         const results = [];
         let index = 0; // 下一个请求的下标
         let count = 0; // 当前请求完成的数量
 
         // 发送请求
         async function request() {
             if (index === urls.length) return;
             const i = index; // 保存序号，使result和urls相对应
             const url = urls[index];
             index++;
             console.log(url);
             try {// 请求成功
                 const res = await fetch(url);
                 // resp 加入到results
                 results[i] = res;
             } catch (err) {// 请求失败
                 // err 加入到results
                 results[i] = err;
             } finally {// 请求失败或成功都补一个新的请求进来
                    // 请求完成计数器
                 count++;
                 // 判断是否所有的请求都已完成
                 if (count === urls.length) {
                     console.log('完成了');
                     resolve(results);
                 }
                 // 
                 request();
             }
         }
 
         //  maxNum大于urls的长度时，应该取的是urls的长度，否则则是取maxNum
         const times = Math.min(maxNum, urls.length);
         // 开启第一次批量调用
         for(let i = 0; i < times; i++) {
             request();
         }
     })
}