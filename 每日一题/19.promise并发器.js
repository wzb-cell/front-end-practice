class Scheduler {
    constructor(limit) {
        this.limit = limit
        this.count = 0
        this.queue = []
    }
    addTask(time, str){
        const request = () => {
            return new Promise((resolve) => {
                setTimeout(() =>{
                    console.log(str)
                    resolve()
                }, time)   
            })
        }
        this.queue.push(request)
    }
    addTask2(url) {
        const request = () => {
            return new Promise((resolve, reject)=> {
                fetch(url).then((res) => {
                    resolve(res);
                }).catch((error) => {
                    console.log(error)
                })
            })

        }
    }

    taskStarter() {
        for(let i = 0; i < this.queue.length; i++) {
            this.request()
        }
    }
    request() {
        if(!this.queue.length || this.count > this.limit){
            return 
        }
        this.count ++
        this.queue.shift()().then(() => {
            // 上一个执行结束，剔除队列，然后下一个才能进队，继续执行
            this.count --
            this.request()
        })
        // 如果是URL的情況
        // this.queue.shift()().then(res =>)
    }
}
const test = new Scheduler(2)
test.addTask(1000,"1");
test.addTask(500,"2");
test.addTask(300,"3");
test.addTask(400,"4");
test.taskStarter()