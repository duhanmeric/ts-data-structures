import { describe, expect, test } from "bun:test";
import { twoCrystalBalls } from "../algorithms/two-crystal-balls";

describe("two crystal balls", () => {
  test("should greater or equal than 0", () => {
    const arr = Array(10).fill(false).concat(Array(10).fill(true));
    expect(twoCrystalBalls(arr)).toBe(10);
  });

  test("should be -1 with all false", () => {
    const arr = Array(20).fill(false);
    expect(twoCrystalBalls(arr)).toBe(-1);
  });

  test("handles an array with all true", () => {
    const arr = Array(20).fill(true);
    expect(twoCrystalBalls(arr)).toBe(0);
  });

  test("handles an array with a single true at the beginning", () => {
    const arr = Array(1).fill(true).concat(Array(19).fill(false));
    expect(twoCrystalBalls(arr)).toBe(0);
  });

  test("handles an array with a single true at the end", () => {
    const arr = Array(19).fill(false).concat(Array(1).fill(true));
    expect(twoCrystalBalls(arr)).toBe(19);
  });

  test("handles a large array", () => {
    const arr = Array(10000).fill(false).concat(Array(10000).fill(true));
    expect(twoCrystalBalls(arr)).toBe(10000);
  });

  test("return -1 if array is empty", () => {
    const arr = [] as boolean[];
    expect(twoCrystalBalls(arr)).toBe(-1);
  });

  test("handles an array with a single element being true", () => {
    const arr = [true];
    expect(twoCrystalBalls(arr)).toBe(0);
  });

  test("handles an array with a single element being false", () => {
    const arr = [false];
    expect(twoCrystalBalls(arr)).toBe(-1);
  });
});
