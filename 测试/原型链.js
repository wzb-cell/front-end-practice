class test {
}

class subTest extends test{
}
const test1 =  new test();
const subTest1 = new subTest();
// console.log(subTest.__proto__ === test.prototype);
// console.log(subTest.__proto__ === Function.prototype);
// console.log(test.__proto__ === Function.prototype);
// console.log(subTest.prototype === test);
// console.log(test1 instanceof test);

// console.log(test1.__proto__ === test.prototype);
// console.log(test1.__proto__ === subTest.prototype);
console.log(subTest1.__proto__ === subTest.prototype);
console.log(subTest1.__proto__.__proto__ === test.prototype);
console.log(subTest1.__proto__.__proto__.__proto__ === Object.prototype);
console.log(subTest.prototype === Function.prototype);
console.log(subTest instanceof Function);
console.log(subTest.__proto__.__proto__ === Function.prototype);
console.log(subTest.__proto__ === test.prototype);
// console.log(subTest1.__proto__ instanceof test1);