/*
 * @PackageName:
 * @Description:
 * @Author: Man
 * @Date: 2022-06-15 11:09:37
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-06-17 10:50:58
 */
// function foo(x){
//     x.push(4)
//     console.log(x)

//     x = [4, 5, 6]
//     x.push(7)
//     console.log(x)
// }
// let a = [1, 2, 3]
// foo(a)
// console.log(a)
console.log(Object.prototype.toString.call([1, 2, 3]));
console.log(Object.prototype.toString.call("123"));

function removeElement(nums, val) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let valCount = 0;
    let temp;
    while (startIndex < endIndex) {
        if (nums[endIndex] === val) {
            endIndex--;
            valCount++;
            continue;
        }

        if (nums[startIndex] === val) {
            // 先进行交换
            temp = nums[startIndex];
            nums[startIndex] = nums[endIndex];
            nums[endIndex] = temp;

            startIndex++;
            endIndex--;
            valCount++;
            continue;
        }

        startIndex++;
    }
    console.log(nums);
    console.log(valCount);
    return nums.length - valCount;
}

// console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([1], 1));
