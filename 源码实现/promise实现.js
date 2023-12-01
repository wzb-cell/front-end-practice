// 等待中
const PROMISE_PENDING_STATE = "pending";
// 成功
const PROMISE_FULFILLED_STATE = "fulfilled";
// 失败
const PROMISE_REJECTED_STATE = "rejected";

class Promise {
  constructor(excute) {
    this.PromiseState = PROMISE_PENDING_STATE;
    this.PromiseResult = undefined;
    // 支持异步修改
    this.callBacks = [];
    // 这里准确来说是把当前实例的this绑定，方便后面函数内部可以访问源对象的实例属性或者方法
    // 也可以不绑定，但是这里默认执行的this指向，则是调用是进行时确定的，又因为外部调用其实为window，在严格的模式下为undefined，故函数执行内部会报错
    try {
      excute(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      console.log(error);
    }
  }
  resolve(result) {
    if (this.PromiseState === PROMISE_PENDING_STATE) {
      this.PromiseState = PROMISE_FULFILLED_STATE;
      this.PromiseResult = result;

      // 循环执行成功的异步操作
      setTimeout(() => {
        this.callBacks.forEach((callBack) => {
          callBack.onResolved(this.PromiseResult);
        });
      }, 0);
    }
    // console.log('resolve', this);
  }
  reject(reason) {
    if (this.PromiseState === PROMISE_PENDING_STATE) {
      this.PromiseState = PROMISE_REJECTED_STATE;
      this.PromiseResult = reason;
      setTimeout(() => {
        this.callBacks.forEach((callBack) => {
          callBack.onRejected(this.PromiseResult);
        });
      }, 0);
    }
    // console.log('reject', this);
  }
  then(onResolved, onRejected) {
    // 默认返回一个promise对象
    return new Promise((resolve, reject) => {
      const callBack = (fn) => {
        try {
          const result = fn(this.PromiseResult);
          // 如果result是一个promise对象, 新返回的promise对象和result的状态保持一直
          if (result instanceof Promise) {
            result.then(
              (res) => {
                resolve(res);
              },
              (rej) => {
                reject(rej);
              }
            );
          } else {
            // 如果result不是一个promise对象，则直接resolve后返回
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };
      // 等待中将异步操作进行存储
      if (this.PromiseState === PROMISE_PENDING_STATE) {
        this.callBacks.push({
          onResolved: () => callBack(onResolved),
          onRejected: () => callBack(onRejected),
        });
      }
      // 成功
      if (this.PromiseState === PROMISE_FULFILLED_STATE) {
        // 执行onResolved方法
        setTimeout(() => {
          callBack(onResolved);
        }, 0);
      }
      // 失败
      if (this.PromiseState === PROMISE_REJECTED_STATE) {
        setTimeout(() => {
          callBack(onRejected);
        }, 0);
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  static resolve(result) {
    return new Promise((resolve, reject) => {
      if (result instanceof Promise) {
        result.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        resolve(result);
      }
    });
  }

  static reject(result) {
    return new Promise((resolve, reject) => {
      reject(result);
    });
  }

  static all(promises) {
    let result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (res) => {
            result[i] = res;
            count++;
            if (count === promises.length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (res) => {
            resolve(res);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
}

// const promise = new Promise((res, rej) => {
// 	res(1);
// })
// const promise2 = new Promise((res, rej) => {
// 	// rej('error');
// 	throw new Error('define error');
// })

// 支持异步状态变更
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{resolve("success2222");}, 2000)
// }).then(
//   (res) => {
//     console.log(res); // success
//     return "success----2";
//   },
//   (rej) => {
// 		console.log(rej);
//   }
// ).then((res) => {
// 	console.log(res);
// });
// console.log(p1);

// 支持then方法异步执行
const p2 = new Promise((resolve, reject) => {
  resolve("1");
})
  .then(
    (res) => {
      console.log(res);
      return "success----2";
    },
    (rej) => {
      console.log(rej);
    }
  )
  .then((res) => {
    console.log(res);
  });
console.log(3);
console.log(p2);

const pAll1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const pAll2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("error 1");
  }, 1000);
});

async function asyncFunc() {
  try {
    const result = await Promise.all([pAll1, pAll2]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
asyncFunc();
