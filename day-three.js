const expect = function(val) {
  return {
    toBe: function(expected) {
      return val === expected 
        ? true
        : "Not Equal"
    },
    notToBe: function(expected) {
      return val !== expected 
        ? true 
        : "Equal"
    }
  }
};

console.log(expect(5).toBe(null)) 
