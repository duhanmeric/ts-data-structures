import { logDeep } from "../helpers/logDeep";
import { Tree, TreeNode } from "../structs/tree";

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
