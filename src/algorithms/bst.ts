import { TreeNode } from "../structs/tree";

export const bstFind = <T>(
  node: TreeNodeObject<T> | undefined,
  value: T
): boolean => {
  if (!node) {
    return false;
  }

  if (value === node.value) {
    return true;
  }

  if (value <= node.value) {
    return bstFind(node.left, value);
  } else {
    return bstFind(node.right, value);
  }
};

export const bstInsert = <T>(
  node: TreeNodeObject<T> | undefined,
  newNode: T
): TreeNodeObject<T> | undefined => {
  if (!node) {
    return new TreeNode(newNode);
  }

  if (newNode <= node.value) {
    node.left = bstInsert(node.left, newNode);
  } else {
    node.right = bstInsert(node.right, newNode);
  }

  return node;
};

export const bstDelete = <T>(
  node: TreeNodeObject<T> | undefined,
  deletingNode: T
): TreeNodeObject<T> | undefined => {
  if (!node) {
    return undefined;
  }

  if (node.value === deletingNode) {
    // if it has no children
    if (!node.left && !node.right) {
      return undefined;
    }

    // if it has 1 children
    if (!node.left || !node.right) {
      return node.left || node.right;
    }

    // if it more than 2 children
    // find its in-order successor (node on the leftmost side of the right subtree)
    let successorParent = node;
    let successor = node.right;
    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }
    node.value = successor.value;
    if (successorParent === node) {
      successorParent.right = successor.right;
    } else {
      successorParent.left = successor.right;
    }
    return node;
  }

  if (deletingNode < node.value) {
    node.left = bstDelete(node.left, deletingNode);
  } else {
    node.right = bstDelete(node.right, deletingNode);
  }

  return node;
};
