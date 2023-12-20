import { beforeAll, describe, expect, test } from "bun:test";
import { Tree, TreeNode } from "../structs/tree";

describe("tree", () => {
  let tree = new Tree<number>();
  beforeAll(() => {
    const root = new TreeNode(0);
    tree.setRoot(root);

    const a = new TreeNode(1);
    const b = new TreeNode(2);
    const c = new TreeNode(3);
    const d = new TreeNode(4);
    root.addChild(a, "left");
    root.addChild(b, "right");
    a.addChild(c, "left");
    a.addChild(d, "right");
  });
  test("preorder", () => {
    expect(tree.traverse("pre")).toEqual([0, 1, 3, 4, 2]);
  });
  test("inorder", () => {
    expect(tree.traverse("in")).toEqual([3, 1, 4, 0, 2]);
  });
  test("postorder", () => {
    expect(tree.traverse("post")).toEqual([3, 4, 1, 2, 0]);
  });
});
