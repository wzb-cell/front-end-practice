
Function.prototype.myCall = function(context) {
    if(typeof this !== 'function'){
      console.log('type error');
    }
    context = context || window;
    let argumets = [...arguments].slice(1);
    context.fn = this;
    let result = context.fn(...argumets);
    delete context.fn;
    return result;
  }
  
  Function.prototype.myApply = function(context) {
    if(typeof this !== 'function'){
      console.log('type error');
    }
    context = context || window;
    let argumets = arguments.length === 2 ? arguments[1] : [];
    context.fn = this;
    let result = context.fn(...argumets);
    delete context.fn;
    return result;
  }
  
  Function.prototype.myBind = function(context, ...list) {
    let fn = this;
    return function(...args) {
      return fn.apply(context, [...list, ...args]);
    }
  }