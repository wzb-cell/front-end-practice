
var a = {
    i: 1,
    toString: function () { return a.i++}
}
console.log(a == 1 && a == 2 && a == 3);

// 第二种方法
var b = [1, 2, 3, 4]
// 非数字与数字进行比较的时候，会优先转化为数字，然后进行比对；
// Object类型与number类型进行比较时，Object类型会转换为number类型。
// 转换时会尝试调用Object.valueOf()方法和Object.toString()方法来获取对应的数值基本类型。在上面的代码中，
// 逻辑转换先调用了Object.valueOf()方法，如果返回的是对象，在接着调用头toString()方法。每次比较都会执行重写后的对象方法toString()，这个方法先返回属性num的值，然后再自增。
b.join = b.shift
console.log(b == 1 && b == 2 && b == 3);

// 第三种方法


var val = 0;
// node里面不存在window对象
Object.defineProperty(window, 'c', {
    get: function () {
        return ++val;
    }
});
console.log(c == 1 && c == 2 && c == 3) // true

/**
 * 可以通过下面的方式进行实现
 */
 (function(window) {
    var val = 0;
    // node里面不存在window对象
    Object.defineProperty(window, 'c', {
        get: function () {
            return ++val;
        }
    });
    console.log(window.c == 1 && window.c == 2 && window.c == 3) // true
    /* Keep source code the same */
     
    // })(typeof window == "undefined" ? global : window);
    // or
})(this);