/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-24 17:34:47
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-25 10:48:49
 */
// const LRUCache = function(capacity) {
//     this.cache = new Map()
//     this.capacity = capacity
// }

// LRUCache.prototype.get = function(key) {
//     if(this.cache.has(key)){
//         //更新位置
//         const value = this.cache.get(key)
//         this.cache.delete(key)
//         this.cache.set(key, value)
//         return value
//     }
//     return -1
// }

// LRUCache.prototype.put = function (key, value) {
//     if(this.cache.has(key)) {
//         this.cache.delete(key)
//     }else{
//         if(this.cache.size>= this.capacity){
//             this.cache.delete(this.cache.keys().next().value)
//         }
//     }
//     this.cache.set(key, value)
//     return this.cache
// }
// LRUCache.prototype.toString = function(){
//     return ("cache:"+JSON.stringify(this.cache))
// }
// const lRUCache = new LRUCache(2)

// console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
// console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
// console.log(lRUCache.get(1))    // 返回 1
// console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCache.get(2))    // 返回 -1 (未找到)
// console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
// console.log(lRUCache.get(3))    // 返回 3
// console.log(lRUCache.get(4) )   // 返回 4

function test() {
    function fn() {
		console.log('我是fn')
	}
    fn.toString = () => {
        console.log('toString()')
        return 'toString'
    }
    return fn
}
console.log(test()())