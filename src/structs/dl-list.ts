export class DoublyLinkedList<T> implements ILinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  append(value: T): void {
    const node = { value, prev: undefined, next: undefined } as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  prepend(value: T): void {
    const node = { value, prev: undefined, next: undefined } as Node<T>;
    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(value: T, index: number): void {
    if (index === this.length) {
      this.append(value);
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else if (index < 0 || index > this.length) {
      throw new Error("LinkedListIndexOutOfBoundsException");
    }

    this.length++;
    const node = { value, prev: undefined, next: undefined } as Node<T>;
    let current = this.head;

    for (let i = 0; current && i < this.length; i++) {
      if (i === index) break;
      current = current.next;
    }

    if (current) {
      node.next = current;
      node.prev = current.prev;

      if (current.prev) {
        current.prev.next = node;
        current.prev = node;
      }
      return;
    }
  }

  remove(value: T): void {
    if (!this.head || !this.tail) {
      return;
    }

    if (this.head.value === value) {
      this.length--;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = undefined;
      }
      return;
    }

    if (this.tail.value === value) {
      this.length--;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = undefined;
      }
      return;
    }

    let current = this.head as Node<T> | undefined;

    for (let i = 1; current && i < this.length; i++) {
      if (current.value === value) {
        this.length--;
        if (current && current.prev && current.next) {
          current.next.prev = current.prev;
          current.prev.next = current.next;
          return;
        }
      }
      current = current.next;
    }
  }

  removeAt(index: number): void {
    if (!this.head) {
      return;
    }

    if (index < 0 || index >= this.length) {
      throw new Error("LinkedListIndexOutOfBoundsException");
    }

    this.length--;
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = undefined;
      }
      return;
    } else if (index === this.length) {
      this.tail = this.tail?.prev;
      if (this.tail) {
        this.tail.next = undefined;
      }
      return;
    }

    let current = this.head as Node<T> | undefined;
    for (let i = 0; current && i < index; i++) {
      if (i === index) {
        break;
      }
      current = current.next;
    }

    if (current && current.prev && current.next) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
      return;
    }
  }

  getLength(): number {
    return this.length;
  }

  get(index: number): T | undefined {
    if (!this.head) {
      return undefined;
    }

    let helperPointer = this.head as Node<T> | undefined;
    for (let i = 0; i < this.length && helperPointer; i++) {
      if (i === index) {
        break;
      }
      helperPointer = helperPointer.next;
    }
    return helperPointer?.value;

    // let i = 0;
    // while (i <= index && helperPointer && helperPointer.next) {
    //   if (i === index) {
    //     return helperPointer.value;
    //   }
    //   helperPointer = helperPointer.next;
    //   i++;
    // }
  }

  logList() {
    let current = this.head;
    let output = "";

    while (current && current !== null) {
      const prevValue = current.prev ? current.prev.value : "-";
      const nextValue = current.next ? current.next.value : "-";

      output += `Value: ${current.value}, Prev: ${prevValue}, Next: ${nextValue}\n`;
      current = current.next;
    }

    console.log(output);
  }
}
