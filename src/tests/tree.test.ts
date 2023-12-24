import { beforeAll, describe, expect, test } from "bun:test";
import { Tree, TreeNode } from "../structs/tree";
import { compareTrees } from "../algorithms/compare-bt";
import { bstFind, bstInsert } from "../algorithms/bst";

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

  test("compare empty trees", () => {
    const firstTree = {} as TreeNodeObject<number>;
    const secondTree = {} as TreeNodeObject<number>;

    const firstTreeObj = new Tree(firstTree);
    const secondTreeObj = new Tree(secondTree);
    expect(compareTrees(firstTreeObj, secondTreeObj)).toBeTrue();
  });

  test("compare 1 empty and another tree", () => {
    const firstTree = { value: 1 } as TreeNodeObject<number>;
    const secondTree = {} as TreeNodeObject<number>;

    const firstTreeObj = new Tree(firstTree);
    const secondTreeObj = new Tree(secondTree);
    expect(compareTrees(firstTreeObj, secondTreeObj)).toBeFalse();
  });

  test("BST - depth first find", () => {
    const BST: TreeNodeObject<number> = {
      value: 17,
      left: {
        value: 15,
        left: { value: 13 },
        right: { value: 16 },
      },
      right: {
        value: 20,
        left: { value: 18 },
        right: { value: 21 },
      },
    };

    const BSTObj = new Tree<number>(BST);
    expect(bstFind(BSTObj.root, 5)).toBeFalse();
    expect(bstFind(BSTObj.root, 13)).toBeTrue();
    expect(bstFind(BSTObj.root, 18)).toBeTrue();
  });

  test("BST - depth first empty tree insert", () => {
    const BST = new Tree<number>();
    BST.root = bstInsert(BST.root, 10);
    expect(BST.root?.value).toBe(10);
  });

  test("BST - depth first insert less than the root", () => {
    const BST = new Tree(new TreeNode(15));
    bstInsert(BST.root, 10);
    expect(BST.root?.left?.value).toBe(10);
  });

  test("BST - depth first insert greater than the root", () => {
    const BST = new Tree(new TreeNode(15));
    bstInsert(BST.root, 20);
    expect(BST.root?.right?.value).toBe(20);
  });

  test("BST - depth first insert greater than the root", () => {
    const BST = new Tree(new TreeNode(15));
    bstInsert(BST.root, 10);
    bstInsert(BST.root, 20);
    bstInsert(BST.root, 5);
    bstInsert(BST.root, 12);
    bstInsert(BST.root, 17);
    bstInsert(BST.root, 25);

    expect(BST.root!.left!.value).toBe(10);
    expect(BST.root!.right!.value).toBe(20);
    expect(BST.root!.left!.left!.value).toBe(5);
    expect(BST.root!.left!.right!.value).toBe(12);
    expect(BST.root!.right!.left!.value).toBe(17);
    expect(BST.root!.right!.right!.value).toBe(25);
  });
});
