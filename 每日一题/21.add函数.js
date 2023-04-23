// function add(...args) {
//     let allArgs = [...args];
    
//     const fn = (...args2) => {
//         allArgs = [...args, ...args2];
//         return fn
//     }
//     fn.toString = function () {
//         return allArgs.reduce((prefix, cur)=>{
//             return prefix + cur
//         })
//     }
//     return fn
// }
function add(...args1) {
    let allArgs = [...args1]
  
    const fn = (...args2) => {
      allArgs = [...allArgs, ...args2]
  
      return fn
    }
  
    fn.toString = function() {
      return allArgs.reduce((pre, next) => {
        return pre + next
      })
    }
  
    return fn
  }
console.log(add(1)(2)(3)().toString());
// console.log(+add(1)(4)(5));