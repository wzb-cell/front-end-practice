/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-24 14:45:37
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-24 15:01:37
 */
// 使用闭包进行解决, 闭包的作用是用来访问其作用域之外的变量
var a=[]
// for(var i=0; i<5; i++){
//     a[i] = function(i){
//     console.log(i);
//         (function(){
//             console.log(i);
//         })()
//     }
// }
for(var j=0; j<5; j++){
    a[j] = function(j){
        (function(){
            console.log(j);
        })()
    }
}
a[1](1)
a[2](2)