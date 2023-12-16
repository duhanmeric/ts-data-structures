export class LinkedList<T> implements ILinkedList<T> {
  private length = 0;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
  }

  // O(1)
  // add to the end of the list
  append(value: T) {
    const node = { value };
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  // O(1)
  // add to the start of the list
  prepend(value: T): void {
    const node = { value } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  // O(N)
  insertAt(value: T, index: number) {
    const node = { value, next: undefined } as Node<T>;
    this.length++;
    let helperPointer = this.head;

    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    if (index === this.length - 1) {
      this.tail.next = node;
      this.tail = node;
      return;
    }

    if (index > this.length - 1) {
      throw new Error("LinkedListIndexOutOfBoundsException");
    }

    let i = 0;
    while (i < this.length && helperPointer && helperPointer.next) {
      if (i === index - 1) {
        const toBeShifted = helperPointer.next;
        node.next = toBeShifted;
        helperPointer.next = node;
      }
      helperPointer = helperPointer.next;
      i++;
    }
  }

  // O(N)
  remove(value: T) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let helperPointer = this.head;
    while (helperPointer.next) {
      if (helperPointer.next.value === value) {
        const toBeRemoved = helperPointer.next;
        helperPointer.next = toBeRemoved.next;
        toBeRemoved.next = undefined;
        this.length--;
        break;
      }
      helperPointer = helperPointer.next;
    }
  }

  // O(N)
  removeAt(index: number) {
    let helperPointer = this.head;

    if (index >= this.length) {
      throw new Error("LinkedListIndexOutOfBoundsException");
    }

    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let i = 0;
    while (i < this.length && helperPointer && helperPointer.next) {
      if (i === index - 1) {
        const toBeRemoved = helperPointer.next;
        if (toBeRemoved === this.tail) {
          this.tail = helperPointer;
        }
        helperPointer.next = toBeRemoved.next;
        toBeRemoved.next = undefined;
        this.length--;
        break;
      }
      helperPointer = helperPointer.next;
      i++;
    }
  }

  get(index: number): T | undefined {
    if (!this.head || !this.tail) {
      return undefined;
    }

    if (index === 0) {
      return this.head.value;
    }

    if (index === this.length - 1) {
      return this.tail.value;
    }

    let i = 0;
    let helperPointer = this.head;
    while (i < this.length && helperPointer.next) {
      if (i === index) {
        return helperPointer.value;
      }
      helperPointer = helperPointer.next;
      i++;
    }
  }

  getLength() {
    return this.length;
  }
}
