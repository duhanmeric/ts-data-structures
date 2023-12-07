// O(N^2)
// It scans the whole array and checks every number.
/// If one number is bigger than the other, it replaces it.
// It iterates the array until all elements are sorted.
// Since adjacent elements are constantly swapped, the array must be scanned its size times.

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const arr = [3, 1, 9, 5, 6, 2];
const result = bubbleSort(arr);
console.log(result);
