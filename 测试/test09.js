let injector = {
    dependencies: {},
    register: function(key, value) {
      this.dependencies[key] = value;
    },
    resolve: function(deps, func, scope) {
      var args = [];
      for(var i = 0; i < deps.length, d = deps[i]; i++) {
        if(this.dependencies[d]) {
          // 存在此依赖
          args.push(this.dependencies[d]);
        } else {
          // 不存在
          throw new Error('不存在依赖：' + d);
        }
      }
      return function() {
        // 这里argumnets是该返回值function中的参数
        func.apply(scope || {}, args.concat(Array.prototype.slice.call(arguments, 0)));
      }   
    }
  }