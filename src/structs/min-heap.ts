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
    this.data.pop();
    this.length--;
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    const lIdx = this.getLeftChildIndex(idx);
    const rIdx = this.getRightChildIndex(idx);
    let smallest = idx;

    if (lIdx < this.length && this.data[lIdx] < this.data[smallest]) {
      smallest = lIdx;
    }

    if (rIdx < this.length && this.data[rIdx] < this.data[smallest]) {
      smallest = rIdx;
    }

    if (smallest !== idx) {
      let temp = this.data[idx];
      this.data[idx] = this.data[smallest];
      this.data[smallest] = temp;

      this.heapifyDown(smallest);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const pIdx = this.getParentIndex(idx);

    if (this.data[pIdx] > this.data[idx]) {
      const tmp = this.data[pIdx];
      this.data[pIdx] = this.data[idx];
      this.data[idx] = tmp;
      this.heapifyUp(pIdx);
    }
  }

  private getParentIndex(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private getLeftChildIndex(idx: number): number {
    return 2 * idx + 1;
  }

  private getRightChildIndex(idx: number): number {
    return 2 * idx + 2;
  }
}
