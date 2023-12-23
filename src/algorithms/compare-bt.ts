import { Tree, TreeNode } from "../structs/tree";

const areNodesEqual = <T>(
  node1: TreeNode<T> | undefined,
  node2: TreeNode<T> | undefined
): boolean => {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }

  return (
    node1.value === node2.value &&
    areNodesEqual(node1.left, node2.left) &&
    areNodesEqual(node1.right, node2.right)
  );
};

export const compareTrees = <T>(firstTree: Tree<T>, secondTree: Tree<T>) => {
  return areNodesEqual(firstTree.root, secondTree.root);
};
