export class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    this.data[0] = this.data[this.length - 1];
    this.length--;

    if (this.length > 0) {
      this.heapifyDown(0);
    }

    return out;
  }

  private heapifyDown(i: number) {
    const lChild = this.getLeftChild(i);
    const rChild = this.getRightChild(i);

    let smallest = i;

    if (lChild < this.length && this.data[lChild] < this.data[smallest]) {
      smallest = lChild;
    }

    if (rChild < this.length && this.data[rChild] < this.data[smallest]) {
      smallest = rChild;
    }

    if (smallest !== i) {
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      this.heapifyDown(smallest);
    }
  }

  private heapifyUp(i: number) {
    if (i === 0) {
      return;
    }

    const parentIndex = this.getParent(i);
    const parentValue = this.data[parentIndex];

    const itemValue = this.data[i];

    if (parentValue > itemValue) {
      this.data[i] = parentValue;
      this.data[parentIndex] = itemValue;
      this.heapifyUp(parentIndex);
    }
  }

  private getParent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChild(i: number): number {
    return i * 2 + 1;
  }

  private getRightChild(i: number): number {
    return i * 2 + 2;
  }
}
