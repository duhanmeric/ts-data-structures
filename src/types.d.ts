type Node<T> = {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
};

type TraverseType = "pre" | "in" | "post";

interface TreeNodeObject<T> {
  value: T;
  left?: TreeNodeObject<T>;
  right?: TreeNodeObject<T>;
}

interface ILinkedList<T> {
  append(value: T): void;
  prepend(value: T): void;
  insertAt(value: T, index: number): void;
  remove(value: T): void;
  removeAt(index: number): void;
  getLength(): number;
  get(index: number): T | undefined;
}
