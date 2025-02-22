"use strict";
function removeDuplicates(nums) {
    let left = 0;
    let tempCache = new Set();
    for (let right = 0; right < nums.length; right++) {
        if (!tempCache.has(nums[right])) {
            tempCache.add(nums[right]);
            left++;
        }
    }
    return left;
}
console.log(removeDuplicates([1, 1, 2]));
//# sourceMappingURL=test2.js.map