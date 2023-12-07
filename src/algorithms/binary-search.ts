// WARNING: Sorted Array Only
// O(logN)
// Continuously split the sequence in half and check the part that meets the condition

const binarySearch = (arr: number[], value: number) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const midIndex = Math.floor(low + (high - low) / 2);
    const midValue = arr[midIndex];
    console.log(midValue, midIndex);

    if (midValue === value) {
      console.log("search success: ", midValue);
      return true;
    } else if (midValue > value) {
      high = midIndex;
    } else {
      low = midIndex + 1;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const hasFound = binarySearch(arr, 0);
console.log(hasFound);
