// bigO = O(N)
// Classic JS builtin indexOf() method under the hood.

export const linearSearch = (arr: number[], val: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};
