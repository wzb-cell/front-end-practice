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

// function rotate(nums: number[], k: number): void {
//     k = k % nums.length;
//     const temp = nums.length - k;
//     let newTempArr = nums.slice(temp, nums.length);
//     for (let i = temp - 1; i >= 0; i--) {
//         nums[i + k] = nums[i];
//     }
//     for (let i = 0; i < k; i++) {
//         nums[i] = newTempArr[i];
//     }
// }

// console.log(rotate([-1, -100, 3, 99], 2));

// function lengthOfLastWord(s: string): number {
//     s = s.trim();
//     let strArr = s.split(" ");
//     return strArr[strArr.length - 1].length;
// }

// function longestCommonPrefix(strs: string[]): string {
//     if (!strs.length) {
//         return "";
//     }
//     let minLength = strs[0].length;
//     let minIndex = 0;
//     let commonStr = "";
//     for (let i = 1; i < strs.length; i++) {
//         if (strs[i].length < minLength) {
//             minLength = strs[i].length;
//             minIndex = i;
//         }
//     }
//     for (let i = 0; i < minLength; i++) {
//         let count = 0;
//         for (let j = 0; j < strs.length; j++) {
//             if (strs[j].startsWith(strs[minIndex].substring(0, i + 1))) {
//                 count++;
//             }
//         }
//         if (count === strs.length) {
//             commonStr = strs[minIndex].substring(0, i + 1);
//         }
//     }
//     return commonStr;
// }

function maxProfit(prices: number[]): number {
    if (prices.length <= 1) {
        return 0;
    }
    let profitSum = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profitSum += prices[i + 1] - prices[i];
        }
    }
    return profitSum;
}
