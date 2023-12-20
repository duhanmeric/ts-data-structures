import { describe, test, expect } from "bun:test";
import { Stack } from "../structs/stack";

describe("stack", () => {
  test("push", () => {
    const stack = new Stack<string>();
    stack.push("A");
    stack.push("B");
    stack.push("C");
    expect(stack.length).toBe(3);
    expect(stack.peek()).toBe("C");
  });

  test("pop", () => {
    const stack = new Stack<string>();
    stack.push("A");
    stack.push("B");
    stack.push("C");
    stack.pop();
    expect(stack.length).toBe(2);
    expect(stack.peek()).toBe("B");
  });

  test("pop makes empty array", () => {
    const stack = new Stack<string>();
    stack.push("A");
    stack.push("B");
    stack.push("C");
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });

  test("pop out of bounds", () => {
    const stack = new Stack<string>();
    stack.push("A");
    stack.push("B");
    stack.push("C");
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });
});
