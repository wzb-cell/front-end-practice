function Animal(type) {
  this.type = type;
}
Animal.prototype.eat = function () {
  console.log("所有动物都有吃东西这个方法");
};

function Dog(type) {
  // 调用父类的构造函数
  Animal.call(this, type);
  // 子类的自定义属性
  this.name = "旺财";
}
// 继承的时间线：原型链继承 ——> 构造函数继承 ——> 组合式继承 ——> 寄生组合式继承
// 寄生组合式继承的点睛之笔：Object.create创建一个原型为Animal.prototype的新对象
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

const newDog = new Dog("dog");
console.log(newDog instanceof Dog);
console.log(newDog instanceof Animal);
console.log(newDog.__proto__);
console.log(Dog.prototype);
console.log(newDog.__proto__ === Dog.prototype);
console.log(newDog.__proto__.__proto__ === Animal.prototype);
