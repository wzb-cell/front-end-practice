Array.prototype._filter = function (exec) {
  const result = [];
  this.forEach((item, index, arr) => {
    if (exec(item, index, arr)) {
      result.push(item);
    }
  });
  return result;
};

const b = [1, 3, 4, 5, 6, 2, 5, 1, 8, 20];

console.log(b._filter((item) => item % 2 === 0)); // [ 4, 6, 2, 8, 20 ]
