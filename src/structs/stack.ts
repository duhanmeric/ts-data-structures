// stacks are last in first out (LIFO)

interface IStack<T> {
  push(value: T): void;
  pop(): void;
  peek(): T | undefined;
}

export class Stack<T> implements IStack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(value: T): void {
    const node = { value, prev: undefined } as Node<T>;

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    const tmp = this.head;
    this.head = node;
    this.head.prev = tmp;
  }

  pop(): void {
    if (!this.head) {
      return;
    }

    const tmp = this.head;
    this.head = this.head?.prev;
    tmp.prev = undefined;
    this.length--;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
