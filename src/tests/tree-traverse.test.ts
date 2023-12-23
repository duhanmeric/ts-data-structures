import { beforeAll, describe, expect, test } from "bun:test";
import { Tree } from "../structs/tree";
import { compareTrees } from "../algorithms/compare-bt";

describe("tree", () => {
  let tree: Tree<number>;
  beforeAll(() => {
    const treeData: TreeNodeObject<number> = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
      },
      right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 },
      },
    };
    tree = new Tree<number>(treeData);
  });
  test("preorder", () => {
    expect(tree.traverse("pre")).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test("inorder", () => {
    expect(tree.traverse("in")).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  test("postorder", () => {
    expect(tree.traverse("post")).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
  test("breadth first search", () => {
    expect(tree.breadthFirstSearch(17)).toBeFalse();
    expect(tree.breadthFirstSearch(3)).toBeTrue();
  });

  test("compare trees", () => {
    const secondTree: TreeNodeObject<number> = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
      },
      right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 },
      },
    };

    const secondTreeObj = new Tree(secondTree);
    expect(compareTrees(tree, secondTreeObj)).toBeTrue();
    secondTreeObj.root!.left!.value = 1124;
    expect(compareTrees(tree, secondTreeObj)).toBeFalse();
  });
});
