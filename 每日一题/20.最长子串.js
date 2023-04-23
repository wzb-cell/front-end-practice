/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-03-02 09:55:55
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-03-02 17:14:02
 */
// 利用滑动窗口的思想
var lengthOfLongestSubstring = function(s) {
    let last = new Set()
    let n = s.length    
    let maxLen = 0
    /**endIndex 为右指针 */
    let endIndex = 0
    // 此时的i为左指针
    for (let i = 0; i < n; i++){
        if(i != 0 ){
            last.delete(s.charAt(i - 1))
        }
        while (endIndex < n && !last.has(s.charAt(endIndex))){
            last.add(s.charAt(endIndex))
            endIndex++
        }
        maxLen = Math.max(maxLen, endIndex - i)
    }
    return maxLen
};
s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))
