/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-10-08 11:04:15
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-10-08 11:04:18
 */
async function test() {
    return new Promise((resolve)=>{
      setTimeout(() => {
          resolve('test 1000');
      }, 1000);
    })
  }
  function fn() {
    return 'fn';
  }
  
  async function next() {
      let res0 = await fn(),
          res1 = await test(),
          res2 = await fn();
      console.log(res0);
      console.log(res1);
      console.log(res2);
  }
  next(); // 1s 后才打印出结果 为什么呢 就是因为 res1在等待promise的结果 阻塞了