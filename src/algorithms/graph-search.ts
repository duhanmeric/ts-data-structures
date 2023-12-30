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

const walk = (
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]
) => {
  if (seen[curr]) {
    return false;
  }
  seen[curr] = true;

  path.push(curr);
  if (curr === needle) {
    return true;
  }

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
};

export const dfs = (
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null => {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length > 0) {
    console.log(path);

    return path;
  }
  return null;
};
