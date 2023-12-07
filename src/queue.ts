const util = require("util");

type Node<T> = {
  value: T;
  next?: Node<T>;
};

interface IQueue<T> {
  length: number;
  enqueue(...args: T[]): void;
  dequeue(): void;
  dequeueBy(count: number): void;
}

class Queue<T> implements IQueue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(...args: T[]): void {
    for (let i = 0; i < args.length; i++) {
      const node = { value: args[i], next: undefined } as Node<T>;
      this.length++;
      if (!this.tail) {
        this.head = this.tail = node;
        continue;
      }

      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue(): void {
    if (!this.head) {
      return;
    }
    this.length--;

    const tmp = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = undefined;
    }

    tmp.next = undefined;
  }

  dequeueBy(count: number): void {
    if (!this.head || count < 1) {
      return;
    }

    let i = 0;
    while (i < count && this.head) {
      this.length--;
      const tmp = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      }
      if (tmp) {
        tmp.next = undefined;
      }
      i++;
    }
  }
}

const qu = new Queue<string>();
qu.enqueue("A", "B", "C", "D", "E", "F", "G", "H", "I", "J");
qu.dequeue();
qu.dequeueBy(6);
console.log(util.inspect(qu, false, null, true));
