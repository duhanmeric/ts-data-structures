import { describe, expect, test } from "bun:test";
import { Queue } from "./queue";

describe("queue", () => {
  test("enqueue", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    expect(qu.length).toBe(5);
    expect(qu.getHead()).toBe("A");
  });

  test("dequeue", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    qu.dequeue();
    expect(qu.length).toBe(4);
    expect(qu.getHead()).toBe("B");
  });

  test("dequeue all", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    qu.dequeue();
    qu.dequeue();
    qu.dequeue();
    qu.dequeue();
    qu.dequeue();
    expect(qu.length).toBe(0);
    expect(qu.getHead()).toBeUndefined();
  });

  test("dequeue one left", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    qu.dequeue();
    qu.dequeue();
    qu.dequeue();
    qu.dequeue();
    expect(qu.length).toBe(1);
    expect(qu.getHead()).toBe("E");
  });

  test("dequeueby", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    qu.dequeueBy(3);
    expect(qu.length).toBe(2);
    expect(qu.getHead()).toBe("D");
  });

  test("dequeueby all", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    qu.dequeueBy(5);
    expect(qu.length).toBe(0);
    expect(qu.getHead()).toBeUndefined();
  });

  test("dequeueby one left", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B", "C", "D", "E");
    qu.dequeueBy(4);
    expect(qu.length).toBe(1);
    expect(qu.getHead()).toBe("E");
  });

  test("dequeue from an empty queue", () => {
    const qu = new Queue<string>();
    expect(qu.length).toBe(0);
    expect(qu.dequeue()).toBeUndefined();
  });

  test("dequeueBy more elements than the queue contains", () => {
    const qu = new Queue<string>();
    qu.enqueue("A", "B");
    qu.dequeueBy(5);
    expect(qu.length).toBe(0);
    expect(qu.getHead()).toBeUndefined();
  });
});
