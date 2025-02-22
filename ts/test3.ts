class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
export let person = new Person("joke", 18);
export function setPerson() {
    person = new Person("update", 19);
}
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // const newNums1 = nums1.splice(0, 0, m);
    // const newNums2 = nums2.splice(0, 0, n);
    // newNums1.forEach((item, index) => {
    //     if (item > newNums2[index]) {
    //         nums1.splice(index, 0, newNums2[index]);
    //     }
    // });
    let index = 0;
    let index1 = 0;
    let index2 = 0;
    let arr = [];

    while (index1 < m && index2 < n) {
        if (nums1[index1] < nums2[index2]) {
            arr[index++] = nums1[index1++];
        } else {
            arr[index++] = nums2[index2++];
        }
    }
    while (index1 < m) {
        arr[index++] = nums1[index1++];
    }
    while (index2 < n) {
        arr[index++] = nums2[index2++];
    }
    nums1 = arr;
    console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

function removeElement(nums: number[], val: number): number {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let valCount = 0;
    let temp;
    while (startIndex <= endIndex) {
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
            valCount++;
            continue;
        }

        startIndex++;
        endIndex--;
    }
    console.log(nums);
    console.log(valCount);
    return nums.length - valCount;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
