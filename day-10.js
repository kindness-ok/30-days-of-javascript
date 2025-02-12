// Day 10
const once = function (fn) {
  return function(...args) {
    if (fn) {
      const result = fn(...args);
      fn = null;
      return result
    }
  }
};

let fn = (a, b, c) => (a * b * c);
let onceFn = once(fn);
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // 
