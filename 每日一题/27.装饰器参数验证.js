Function.prototype.before = function (beforeFn) {
  const _this = this;
  console.log("事件校验之前", arguments);
  return function (...args) {
    console.log("事件校验之前", args);
    beforeFn.apply(this, args);
    return _this.apply(this, args);
  };
};
Function.prototype.after = function (afterFn) {
  const _this = this;
  console.log("事件校验通过", arguments);
  return function (...args) {
    const result = _this.apply(this, args);
    afterFn.apply(this, args);
    console.log("事件校验通过之后", args);
    return result;
  };
};
function handler() {
  console.log("事件进行点击了");
}

function test() {
  console.log("事件点击前进行校验");
}
function testAfter() {
  console.log("事件校验通过");
}
handler = handler.before(test).after(testAfter);
handler("ceshi");
