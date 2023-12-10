// WARNING: Sorted Array Only
// O(logN)
// Continuously split the sequence in half and check the part that meets the condition

export const binarySearch = (arr: number[], value: number): boolean => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const midIndex = Math.floor(low + (high - low) / 2);
    const midValue = arr[midIndex];

    if (midValue === value) {
      return true;
    } else if (midValue > value) {
      high = midIndex;
    } else {
      low = midIndex + 1;
    }
  }

  return false;
};
