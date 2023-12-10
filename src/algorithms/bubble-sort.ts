// O(N^2)
// It scans the whole array and checks every number.
// If one number is bigger than the other, it replaces it.
// It iterates the array until all elements are sorted.
// Since adjacent elements are constantly swapped, the array must be scanned its size times.

export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};
