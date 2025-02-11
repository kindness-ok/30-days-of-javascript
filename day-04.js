// Day 04
const createCounter = (init) => {
  const counter = init;
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => (init = counter),
  }
};
console.log(createCounter(5).increment())
