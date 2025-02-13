// Day 11
const rememberIt = (fn) => {
  return function (...args) {
    let memory = [];
    console.log(...args, 'args', args)
    memory.push(...args);
    if (memory.includes(args)) return undefined;
    const result = fn(...args);
    console.log(memory, 'MEMMM', result);
  }
}

let callCount = 0;
const memoizedFn = rememberIt(function (a, b) {
  callCount += 1;
  return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(4, 5) // 5
memoizedFn(4, 5) // 5
console.log(callCount) // 1
