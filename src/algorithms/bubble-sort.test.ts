import { describe, test, expect } from "bun:test";
import { bubbleSort } from "./bubble-sort";

describe("bubble sort", () => {
  test("handle sort", () => {
    const arr = [3, 1, 9, 5, 6, 2];
    const expectedSortedArray = [1, 2, 3, 5, 6, 9];
    expect(bubbleSort(arr)).toEqual(expectedSortedArray);
  });

  test("single item array", () => {
    const arr = [1];
    const expectedSortedArray = [1];
    expect(bubbleSort(arr)).toEqual(expectedSortedArray);
  });

  test("array with duplicated items", () => {
    const arr = [2, 2, 2, 5, 3, 7, 7, 9];
    const expectedSortedArray = [2, 2, 2, 3, 5, 7, 7, 9];
    expect(bubbleSort(arr)).toEqual(expectedSortedArray);
  });

  test("handle already sorted array", () => {
    const arr = [1, 3, 5, 7, 9];
    const expectedSortedArray = [1, 3, 5, 7, 9];
    expect(bubbleSort(arr)).toEqual(expectedSortedArray);
  });

  test("handle reverse sorted array", () => {
    const arr = [9, 7, 5, 3, 2, 1, 0];
    const expectedSortedArray = [0, 1, 2, 3, 5, 7, 9];
    expect(bubbleSort(arr)).toEqual(expectedSortedArray);
  });

  test("handles sorting a large array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const sortedArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(bubbleSort(largeArray)).toEqual(sortedArray);
  });

  test("correctly sorts an array with negative numbers", () => {
    const arr = [-3, -1, 2, -2, 0];
    const expectedSortedArray = [-3, -2, -1, 0, 2];
    expect(bubbleSort(arr)).toEqual(expectedSortedArray);
  });
});
