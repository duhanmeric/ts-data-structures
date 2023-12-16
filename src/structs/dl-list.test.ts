import { describe, expect, test } from "bun:test";
import { DoublyLinkedList } from "./dl-list";

describe("doubly linked list", () => {
  test("append 1 element", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    expect(list.getLength()).toBe(1);
    expect(list.get(0)).toBe("A");
  });

  test("append multiple element", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    expect(list.getLength()).toBe(3);
    expect(list.get(0)).toBe("A");
    expect(list.get(1)).toBe("B");
    expect(list.get(2)).toBe("C");
  });

  test("prepend 3 times and append 1 time", () => {
    const list = new DoublyLinkedList<string>();
    list.prepend("A");
    list.prepend("B");
    list.prepend("C");
    list.append("D");
    expect(list.getLength()).toBe(4);
    expect(list.get(0)).toBe("C");
    expect(list.get(2)).toBe("A");
    expect(list.get(3)).toBe("D");
  });

  test("insert at the start", () => {
    const list = new DoublyLinkedList<string>();
    list.insertAt("A", 0);
    expect(list.getLength()).toBe(1);
    expect(list.get(0)).toBe("A");
  });

  test("insert at the middle", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.insertAt("D", 1);
    expect(list.getLength()).toBe(4);
    expect(list.get(1)).toBe("D");
  });

  test("insert at the end", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.append("D");
    list.insertAt("E", 4);
    expect(list.getLength()).toBe(5);
    expect(list.get(4)).toBe("E");
  });

  test("insert out ouf bounds", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    expect(() => list.insertAt("B", 7)).toThrow(
      "LinkedListIndexOutOfBoundsException"
    );
  });

  test("remove existing element", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.remove("B");
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("C");
  });

  test("remove non-existing element", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.remove("D");
    expect(list.getLength()).toBe(3);
  });

  test("removeAt from start", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(0);
    expect(list.getLength()).toBe(2);
    expect(list.get(0)).toBe("B");
  });

  test("removeAt from middle", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(1);
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("C");
  });

  test("removeAt from middle", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(1);
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("C");
  });

  test("removeAt from end", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(2);
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("B");
  });

  test("remove out of bounds", () => {
    const list = new DoublyLinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    expect(() => list.removeAt(5)).toThrow(
      "LinkedListIndexOutOfBoundsException"
    );
  });
});
