import { describe, expect, test } from "bun:test";
import { AsyncQueue } from "./async-queue";

async function makeAsyncRequest(
  data: string,
  isSuccess: boolean
): Promise<string> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `Processed ${data}`;
      isSuccess ? resolve(result) : reject(result);
    }, 500);
  });
}

describe("async queue", () => {
  test("enqueue adds tasks to the queue", () => {
    const queue = new AsyncQueue<string>();
    queue.enqueue(makeAsyncRequest("Task 1", true));
    queue.enqueue(makeAsyncRequest("Task 2", true));
    expect(queue.length).toBe(2);
  });

  test("enqueue adds tasks to the queue that fails at least one", () => {
    const queue = new AsyncQueue<string>();
    queue.enqueue(makeAsyncRequest("Task 1", true));
    queue.enqueue(makeAsyncRequest("Task 2", false));
    queue.enqueue(makeAsyncRequest("Task 2", true));
    expect(queue.length).toBe(3);
  });

  test("dequeue removes tasks from the queue", async () => {
    const queue = new AsyncQueue<string>();
    queue.enqueue(makeAsyncRequest("Task 1", true));
    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(queue.length).toBe(0);
  });

  test("processes tasks up to its capacity", async () => {
    const queue = new AsyncQueue<string>();
    queue.enqueue(makeAsyncRequest("Task 1", true));
    queue.enqueue(makeAsyncRequest("Task 2", false));
    queue.enqueue(makeAsyncRequest("Task 3", false));
    queue.enqueue(makeAsyncRequest("Task 4", true));

    expect(queue.activeTaskCount).toBeLessThanOrEqual(AsyncQueue.capacity);
  }, 500);
});
