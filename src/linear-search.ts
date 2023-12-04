const linearSearch = (arr: number[], val: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const result = linearSearch(arr, 7);

console.log(result);

// bigO = O(N)
