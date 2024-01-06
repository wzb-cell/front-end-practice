function limitConcurrency(tasks, limit) {
    return new Promise((resolve, reject) => {
      let results = [];
      let runningCount = 0;
      let currentIndex = 0;
  
  
      function runTask(index) {
        if (index >= tasks.length) {
          resolve(results);
          return;
        }
  
  
        runningCount++;
        tasks[index]()
          .then((result) => {
            results[index] = result;
            console.log(result) 






            
          })
          .catch((error) => {
            results[index] = error;
          })
          .finally(() => {
            runningCount--;
            runTask(currentIndex++);
          });
  
  
        if (runningCount < limit) {
          runTask(currentIndex++);
        }
      }
  
  
      runTask(currentIndex);
    });
  }
  
  
  // 测试案例
  const tasks = [
    () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    () => new Promise((resolve) => setTimeout(() => resolve(3), 1500)),
    // ...
  ];

  const fetchUrl = (url) => {
    return new Promise(async (resolve, reject) => {
        // 第一种方法；默认的是个体方法
        const data = await fetch(url);
        resolve(data);
        // 第二种方法；
        fetch(url).then((res) => {
            resolve(res);
        }, err => {
            reject(err);
        })
        //post 方法
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
        fetch(url, options).then((res) => {
            resolve(res);
        }, (err)=> {
            reject(err);
        })

    })
  }
  const limitPromise = (tasks, limit) => {
    return  new Promise((resolve, reject) => {
        const result = [];
        let runningCount = 0;
        let currentIndex = 0;
        const runTask = (index) => {
            if(index >= tasks.length){
                resolve(result);
                return;
            }
            // 当前运行的数量
            runningCount ++;
            tasks[currentIndex]().then((res) => {
                result[currentIndex] = res;
            }).catch(err => {
                result[currentIndex] = err;
            }).finally(() => {
                runningCount--;
                tasks[currentIndex++]();
            })
            if (runningCount < limit) {
                runTask(currentIndex++);
            }
        }
        runTask(currentIndex);
    })
  }
  const tasks2 = [
    fetchUrl('URL1'), 
    fetchUrl('URL2'), 
    fetchUrl('URL3'), 
  ]