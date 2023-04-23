/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-04-07 10:26:12
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-04-07 11:17:11
 */
// export * from './foo.js'
// export const baz = 'orginal:bar's
const bar = 'orginal:bar'
export {baz as test} from './foo.js';
// import {default as test} from './foo.js'
console.log(baz);