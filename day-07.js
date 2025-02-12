// Day 07
const reduce = (nums, fn, init) => {
  let result = 0;
  if (nums.length === 0) return init
  for (let i = 0; i < nums.length; i++) {
    const value = fn(init, nums[i])
    init = value
    result = init
  }
  return result
};

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100))
