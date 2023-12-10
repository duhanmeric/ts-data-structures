import { describe, expect, test } from "bun:test";
import { linearSearch } from "./linear-search";

describe("linear search", () => {
  test("is in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const val = 7;
    const expectedIndex = 6;
    expect(linearSearch(arr, val)).toBe(expectedIndex);
  });

  test("is not in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const val = 9;
    const expectedIndex = -1;
    expect(linearSearch(arr, val)).toBe(expectedIndex);
  });

  test("handle empty array", () => {
    const arr = [] as number[];
    const val = 9;
    const expectedIndex = -1;
    expect(linearSearch(arr, val)).toBe(expectedIndex);
  });
});
