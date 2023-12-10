import { describe, expect, test } from "bun:test";
import { LinkedList } from "./linked-list";

describe("linked list append method", () => {
  test("append 1 element", () => {
    const list = new LinkedList<string>();
    list.append("A");
    expect(list.getLength()).toBe(1);
    expect(list.get(0)).toBe("A");
  });

  test("append more than 1 element", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    expect(list.getLength()).toBe(2);
    expect(list.get(0)).toBe("A");
    expect(list.get(1)).toBe("B");
  });

  test("appends different data types", () => {
    const list = new LinkedList();
    list.append("A");
    list.append(1);
    list.append(true);
    expect(list.getLength()).toBe(3);
    expect(list.get(0)).toBe("A");
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(true);
  });
});

describe("linked list prepend method", () => {
  test("prepend 3 times and append 1 time", () => {
    const list = new LinkedList<string>();
    list.prepend("A");
    list.prepend("B");
    list.prepend("C");
    list.append("D");
    expect(list.getLength()).toBe(4);
    expect(list.get(0)).toBe("C");
    expect(list.get(2)).toBe("A");
    expect(list.get(3)).toBe("D");
  });
});

describe("linked list insertAt method", () => {
  test("insert at the start", () => {
    const list = new LinkedList<string>();
    list.insertAt("A", 0);
    expect(list.getLength()).toBe(1);
    expect(list.get(0)).toBe("A");
  });

  test("insert at the middle", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.insertAt("D", 1);
    expect(list.getLength()).toBe(4);
    expect(list.get(1)).toBe("D");
  });

  test("insert at the end", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.append("D");
    list.insertAt("E", 4);
    expect(list.getLength()).toBe(5);
    expect(list.get(4)).toBe("E");
  });

  test("insert out ouf bounds", () => {
    const list = new LinkedList<string>();
    list.append("A");
    expect(() => list.insertAt("B", 7)).toThrow(
      "LinkedListIndexOutOfBoundsException"
    );
  });
});

describe("linked list remove method", () => {
  test("remove existing element", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.remove("B");
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("C");
  });

  test("remove non-existing element", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.remove("D");
    expect(list.getLength()).toBe(3);
  });
});

describe("linked list removeAt method", () => {
  test("remove from start", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(0);
    expect(list.getLength()).toBe(2);
    expect(list.get(0)).toBe("B");
  });

  test("remove from middle", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(1);
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("C");
  });

  test("remove from end", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    list.removeAt(2);
    expect(list.getLength()).toBe(2);
    expect(list.get(1)).toBe("B");
  });

  test("remove out of bounds", () => {
    const list = new LinkedList<string>();
    list.append("A");
    list.append("B");
    list.append("C");
    expect(() => list.removeAt(5)).toThrow(
      "LinkedListIndexOutOfBoundsException"
    );
  });
});
