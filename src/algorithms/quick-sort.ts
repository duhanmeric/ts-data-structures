// bigO(nlogn) unless its reverse/already sorted (in that case it becomes o(n^2))

export const quickSort = (arr: number[], lo: number, hi: number): void => {
  if (lo >= hi) return;
  let pivotIndex = partition(arr, lo, hi);
  quickSort(arr, lo, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, hi);
};

// returns location of the pivot
const partition = (arr: number[], lo: number, hi: number): number => {
  let pivot = arr[hi];

  let j = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      j++;
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  j++;
  const tmp = arr[j];
  arr[j] = arr[hi];
  arr[hi] = tmp;

  return j;
};
