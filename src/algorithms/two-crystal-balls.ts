// bigO = O(sqrt(N))

const twoCrystalBalls = (breaks: boolean[]) => {
  // find jump amount
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  // go until the first true in the array, then break;
  // here the first ball breaks, if we throw the second ball we find the point where it will break
  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // Rollback from the last checkpoint as far as jmpAmount
  i -= jmpAmount;

  // Finding the point where the last ball will be thrown without breaking
  // Will now only go as far as jmpAmount from the last checkpoint (because it should be broken in this range)
  // Return index if you have reached the breaking point (index means floor in this problem)
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
};

const arr = Array(10).fill(false).concat(Array(10).fill(true));
const result = twoCrystalBalls(arr);
console.log(result);
