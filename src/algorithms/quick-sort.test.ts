import { expect, test, describe } from "bun:test";
import { quickSort } from "./quick-sort";

describe("quick sort", () => {
  test("regular sort", () => {
    const arr = [8, 2, 4, 7, 1, 3, 9, 6, 5];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("empty arr", () => {
    const arr = [] as number[];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([]);
  });

  test("single element", () => {
    const arr = [5];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([5]);
  });

  test("reverse sorted", () => {
    const arr = [5, 4, 3, 2, 1];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test("already sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test("negative numbers", () => {
    const arr = [-1, -3, -5, -2, 5];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([-5, -3, -2, -1, 5]);
  });

  test("duplicated array", () => {
    const arr = [1, 5, 5, 5, 3, 2, 4];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 3, 4, 5, 5, 5]);
  });

  test("large array", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => 10000 - i);
    quickSort(arr, 0, arr.length - 1);
    const expected = Array.from({ length: 10000 }, (_, i) => i + 1);
    expect(arr).toEqual(expected);
  });
});
