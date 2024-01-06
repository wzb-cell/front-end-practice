function extractCoefficients(equation) {
  // 使用正则表达式匹配二元一次方程
  const match = equation.match(
    /([+-]?\d*)x\s*([+-]?\d*)y\s*([+-]?\d*)\s*([+-]?\d*)\s*=\s*0/
  );
  console.log(match);

  // 提取系数，如果没有匹配到，默认为0
  const a = parseInt(match[1]) || 0;
  const b = parseInt(match[2]) || 0;
  const c = parseInt(match[3]) || 0;
  const d = parseInt(match[4]) || 0;

  // 返回系数对象
  return { a, b, c, d };
}

// 例子
const equation = "2x + 5y - 3 + 4 = 0";
const coefficients = extractCoefficients(equation);

console.log("系数 a:", coefficients.a);
console.log("系数 b:", coefficients.b);
console.log("系数 c:", coefficients.c);
console.log("系数 d:", coefficients.d);
