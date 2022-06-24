/*
 * @PackageName: 
 * @Description
 * @Author: Man
 * @Date: 2022-06-24 11:12:49
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-06-24 11:12:53
 */
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  async function async2() {
    console.log("async2");
  }
  async1();
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });
  console.log("script end");