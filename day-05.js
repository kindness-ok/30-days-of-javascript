// Day 05
const map = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // call fn to transform the elements
    //        element, index, array
    result.push(fn(arr[i]));
  }
  return result;
};

console.log(map([1, 2, 3, 4], function double(n) { return n * 2 }))
