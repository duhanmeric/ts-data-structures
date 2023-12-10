// The goal is to create a queue that holds 3 async requests at max.

interface IAsyncQueue<T> {
  enqueue(req: Promise<T>): void;
  dequeue(): void;
}

export class AsyncQueue<T> implements IAsyncQueue<T> {
  public length: number;
  public static capacity = 3;
  public activeTaskCount: number;
  private head?: Node<Promise<T>>;
  private tail?: Node<Promise<T>>;

  constructor() {
    this.length = 0;
    this.activeTaskCount = 0;
  }

  enqueue(request: Promise<T>) {
    const asyncNode = { value: request, next: undefined } as Node<Promise<T>>;

    this.length++;
    if (!this.tail) {
      this.head = this.tail = asyncNode;
    } else {
      this.tail.next = asyncNode;
      this.tail = asyncNode;
    }

    this.tryProcessNext();
  }

  tryProcessNext() {
    if (this.activeTaskCount < AsyncQueue.capacity) {
      if (!this.head) {
        return;
      }

      this.activeTaskCount++;
      const asyncNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      }
      asyncNode.next = undefined;

      asyncNode.value
        .then((data) => {
          this.dequeue();
        })
        .catch((err) => {
          this.dequeue();
        });
    }
  }

  dequeue() {
    this.activeTaskCount--;
    this.length--;
    this.tryProcessNext();
  }
}
