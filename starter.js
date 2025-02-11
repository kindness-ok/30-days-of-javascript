const secondLargestInt = (arr) => {
  // Write your code here
  let max = arr;
  let secondMax;

  let left = 0;
  let right = arr.length - 1;

  if (arr.length < 2) return -1

  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else if (arr[left] > arr[right]) {
      secondMax = secondMax > arr[right] ? secondMax : arr[right];
      max = arr[left];
      right--;
    } else {
      secondMax = secondMax > arr[left] ? secondMax : arr[left];
      max = arr[right];
      left++;
    }
  }
  return secondMax
}

console.log(secondLargestInt([1, 9, 4, 5, 5, 8]))
