// 函数式编程  面向切面编程
function test() {
  console.log(this, "test");
  console.log(2);
}
// 需求：在不改变原有代码的基础上，增加test函数 执行前的操作，执行后的操作（这两个功能均为非业务功能）
Function.prototype.before = function (beforeFn) {
  //该this为中间函数,即_this就是中间函数
  const _this = this;

  return function () {
    console.log(this, "before_this");
    beforeFn.call(this, ...arguments);
    _this.call(this, ...arguments);
  };
};
Function.prototype.after = function (afterFn) {
  //该this为原函数test
  const _this = this;

  // 中间函数
  return function () {
    console.log(this, "after_this"); //该this为obj
    _this.call(this, ...arguments);
    afterFn.call(this, ...arguments);
  };
};

let obj = {
  test: test,
};
test = test
  .after(function () {
    // console.log(this, "test_after");
    console.log(this);
    console.log(...arguments);
    console.log(3);
  })
  .before(function () {
    // console.log(this, "test_before");
    console.log(this);
    console.log(...arguments);
    console.log(1);
  });

/* 
需要解决的问题：
1、before after分别挂载到哪里
2、执行顺序如何保证
3、this指向问题
4、传参问题
*/
// 这里面执行的就是before函数返回的function
test.call(obj, 1, 2, 3);
