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

class Tree<T> {
  public root?: TreeNode<T>;

  constructor() {}

  setRoot(root: TreeNode<T>) {
    this.root = root;
  }

  private preOrderWalk(node: TreeNode<T> | undefined, result: T[]): void {
    if (node) {
      result.push(node.value);
      this.preOrderWalk(node.left, result);
      this.preOrderWalk(node.right, result);
    }
  }

  private inOrderWalk(node: TreeNode<T> | undefined, result: T[]): void {
    if (node) {
      this.inOrderWalk(node.left, result);
      result.push(node.value);
      this.inOrderWalk(node.right, result);
    }
  }

  private postOrderWalk(node: TreeNode<T> | undefined, result: T[]): void {
    if (node) {
      this.postOrderWalk(node.left, result);
      this.postOrderWalk(node.right, result);
      result.push(node.value);
    }
  }

  traverse(type: TraverseType) {
    const result: T[] = [];
    if (type === "pre") {
      this.preOrderWalk(this.root, result);
    } else if (type === "in") {
      this.inOrderWalk(this.root, result);
    } else if (type === "post") {
      this.postOrderWalk(this.root, result);
    }
    return result;
  }
}

const tree = new Tree<number>();
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

const preOrderResult = tree.traverse("pre");
const inOrderResult = tree.traverse("in");
const postOrderWalk = tree.traverse("post");

logDeep(tree);
