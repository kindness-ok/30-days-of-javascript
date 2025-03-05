// Day 06
const filter = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const boolean = fn(arr[i])
    if (boolean) result.push(arr[i])
  }
  return result;
};

console.log(filter([11, 1, 2, 3, 4], function sum(n) { return n > 2 }))
console.log(filter([11, 1, 2, 3, 4], function sum(n) { return n > 10 }))
