"use strict";
// 超出时间限制
// function rotate(nums: number[], k: number): void {
//     k = k % nums.length;
//     for (let i = 0; i < k; i++) {
//         let temp = nums[nums.length - 1];
//         for (let j = nums.length - 1; j > 0; j--) {
//             nums[j] = nums[j - 1];
//         }
//         nums[0] = temp;
//     }
// }
function rotate(nums, k) {
    k = k % nums.length;
    const temp = nums.length - k;
    let newTempArr = nums.slice(temp, nums.length);
    for (let i = temp - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = newTempArr[i];
    }
}
console.log(rotate([-1, -100, 3, 99], 2));
//# sourceMappingURL=%E8%BD%AE%E8%BD%AC.js.map