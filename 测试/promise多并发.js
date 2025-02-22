const arr = [];
const result = [];
for (let i = 0; i < 11; i++) {
  arr.push(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log("done", i);
          resolve(i);
        }, 100 * i);
      })
  );
}
// 异步请求方法
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

const parallelRun = () => {
  const runingTask = new Map();
  const inqueue = (totalTask, max) => {
    while (runingTask.size < max && totalTask.length) {
      const newTask = totalTask.shift();
      const tempName = totalTask.length;
      runingTask.set(tempName, newTask);
      // 查看保存的結果
      newTask().then(res => {
        result[tempName] = res;
      }).catch(err => {
        result[tempName] = err;
      }).finally(() => {
        runingTask.delete(tempName);
        inqueue(totalTask, max);
      })
    //   newTask().finally(() => {
    //     runingTask.delete(tempName);
    //     inqueue(totalTask, max);
    //   });
    }
  };
  return inqueue;
};
parallelRun()(arr, 6);
console.log(result);
// setTimeout(()=> {console.log(result)}, 2000);
