import { describe, expect, test } from "bun:test";
import { bfs, dfs } from "../algorithms/graph-search";

describe("graph search", () => {
  test("bfs - graph matrix", function () {
    const matrix: number[][] = [
      [0, 2, 3, 0, 0],
      [0, 0, 0, 3, 0],
      [0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 7, 0],
    ];

    expect(bfs(matrix, 0, 3)).toEqual([0, 1, 3]);

    expect(bfs(matrix, 1, 4)).toEqual(null);
  });

  test("bfs - graph list", function () {
    const list: WeightedAdjacencyList = [
      [
        { to: 1, weight: 2 },
        { to: 2, weight: 2 },
      ],
      [{ to: 3, weight: 3 }],
      [{ to: 4, weight: 5 }],
      [],
      [{ to: 3, weight: 7 }],
    ];

    expect(dfs(list, 0, 3)).toEqual([0, 1, 3]);

    expect(dfs(list, 1, 4)).toEqual(null);
  });
});
