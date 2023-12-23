export class Tree<T> {
  public root?: TreeNode<T>;

  constructor(treeObject?: TreeNodeObject<T>) {
    if (treeObject) {
      this.root = this.buildTree(treeObject);
    }
  }

  private buildTree(obj: TreeNodeObject<T>): TreeNode<T> {
    const leftChild = obj.left ? this.buildTree(obj.left) : undefined;
    const rightChild = obj.right ? this.buildTree(obj.right) : undefined;
    return new TreeNode(obj.value, leftChild, rightChild);
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

  breadthFirstSearch(value: T): boolean {
    const q = [this.root];

    while (q.length > 0) {
      const curr = q.shift();

      if (curr?.value === value) {
        return true;
      }

      if (curr?.left) {
        q.push(curr.left);
      }

      if (curr?.right) {
        q.push(curr.right);
      }
    }

    return false;
  }
}

export class TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;

  constructor(value: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
