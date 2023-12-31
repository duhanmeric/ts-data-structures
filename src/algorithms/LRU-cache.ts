const createNode = <V>(value: V): Node<V> => {
  return { value };
};

export class LRU<K, V> {
  private static capacity = 3;

  private head?: Node<V>;
  private tail?: Node<V>;
  private length: number;

  private lookup: Map<K, Node<V>>;
  private reverseLookup: Map<Node<V>, K>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, Node<V>>();
    this.reverseLookup = new Map<Node<V>, K>();
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key);
    if (!node) {
      node = createNode(value);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    const node = this.lookup.get(key);
    if (!node) {
      return undefined;
    }

    this.detach(node);
    this.prepend(node);

    return node.value;
  }

  private detach(node: Node<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: Node<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= LRU.capacity) {
      return;
    }

    const tail = this.tail as Node<V>;
    this.detach(this.tail as Node<V>);

    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
