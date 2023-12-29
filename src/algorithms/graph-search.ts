//    (2)     (3)
// 0 ----> 1 ----> 3
// |               ^
// | (3)           |
// v  (5)      (7) |
// 2 ----> 4 -------

export const bfs = (graph: number[][], source: number, needle: number) => {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  const q = [source];
  seen[source] = true;

  do {
    const curr = q.shift() as number;

    if (curr === needle) {
      break;
    }

    const adjs = graph[curr] as number[];
    for (let i = 0; i < graph.length; i++) {
      if (adjs[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  } while (q.length);

  if (prev[needle] == -1) {
    return null;
  }

  let curr = needle;

  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
};
