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

function canJump(nums: number[]): boolean {
    if (nums.length === 1) return true;
    let tempMaxIndex = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        // 如果跳转的最大长度小于遍历下标，则证明不能走到这里，退出
        if (tempMaxIndex < i) {
            return false;
        }
        // 如果最大长度大于之前的长度就立即更新
        if (i + nums[i] > tempMaxIndex) {
            tempMaxIndex = i + nums[i];
        }

        if (i + nums[i] >= nums.length - 1) {
            return true;
        }
    }
    return false;
}

console.log(canJump([1, 0, 1, 0]));

function intToRoman(num: number): string {
    const numberToRomanMap: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];
    let result = "";
    for(let i = 0; i < numberToRomanMap.length; i++){
        const count = Math.floor(num/numberToRomanMap[i][0]);
        if(count){
            num = num % numberToRomanMap[i][0];
            result += numberToRomanMap[i][1].repeat(count);
        }
    }
    return result;
};
