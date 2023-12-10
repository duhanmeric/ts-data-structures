import { describe, expect, test } from "bun:test";
import { binarySearch } from "./binary-search";

describe("binary search", () => {
  test("return true if element is in the given array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const val = 4;
    expect(binarySearch(arr, val)).toBeTrue();
  });

  test("return false if element is not the given array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const val = 17;
    expect(binarySearch(arr, val)).toBeFalse();
  });

  test("return false if the array is not sorted", () => {
    const arr = [3, 1, 4, 2, 5];
    const val = 3;
    expect(binarySearch(arr, val)).toBeFalse();
  });
});
