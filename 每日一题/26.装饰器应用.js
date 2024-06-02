// 装饰器函数，用于捕获异常
function catchException(target, name, descriptor) {
  console.log(descriptor);
  const originalFunction = descriptor.value;

  descriptor.value = function (...args) {
    try {
      return originalFunction.apply(this, args);
    } catch (error) {
      console.error(`Exception caught in ${name}:`, error);
    }
  };

  return descriptor;
}

class Example {
  constructor() {
    // 手动应用装饰器
    this.throwError = catchException(
      this,
      "throwError",
      Object.getOwnPropertyDescriptor(Example.prototype, "throwError")
    );
  }

  throwError() {
    throw new Error("This is a simulated error");
  }

  noDecorator() {
    throw new Error("This error will not be caught by the decorator");
  }
}

const exampleInstance = new Example();

// 使用手动应用装饰器的函数
exampleInstance.throwError(); // 错误会被捕获并输出到控制台

// 未使用装饰器的函数
try {
  exampleInstance.noDecorator(); // 错误不会被捕获
} catch (error) {
  console.error("This error will not be caught by the decorator:", error);
}
