// Day 08
const compose = function(functions) {
  return function(x) {
    let answer = x;
    for (let i = functions.length-1; i > -1; i--) {
      answer = functions[i](answer)
    }
    return answer;
  }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(3))
