
const mySetInterval = (fn, delay) => {
    let timer = null
    const interval = ()=> {
        fn()
        timer = setTimeout(interval, delay)
    }
    timer = setTimeout(interval, delay)
    return {
        cancel: () => clearTimeout(timer)
    }
}
let objSetTime = mySetInterval(function(){console.log(111111)}, 1000)
setTimeout(()=>{
    clearTimeout(objSetTime.cancel())
}, 3000)