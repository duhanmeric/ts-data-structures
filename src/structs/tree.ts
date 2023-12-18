import { logDeep } from "../helpers/logDeep";

class TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;

  constructor(value: T) {
    this.value = value;
  }

  addChild(child: TreeNode<T>, target: "left" | "right"): void {
    this[target] = child;
  }
}

// TODO: implement more efficient way to build the tree
const root = new TreeNode(0);
const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
root.addChild(a, "left");
root.addChild(b, "right");
a.addChild(c, "left");
a.addChild(d, "right");
logDeep(root);
