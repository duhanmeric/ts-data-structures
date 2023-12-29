import { expect, test } from "bun:test";
import { bfs } from "../algorithms/graph-search";

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
