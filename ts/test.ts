/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-06-20 15:23:48
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-06-20 15:33:39
 */
const reverse = (s: string): string => s.split('').reverse().join('');

reverse('elon musk'); // -> 'ksum nole'
console.log(reverse('elon musk'))