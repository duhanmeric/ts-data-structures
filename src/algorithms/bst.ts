export const btsFind = <T>(
  node: TreeNodeObject<T> | undefined,
  value: T
): boolean => {
  if (!node) {
    return false;
  }

  if (value === node.value) {
    console.log("FOUND", node.value);
    return true;
  }

  if (value <= node.value) {
    return btsFind(node.left, value);
  } else {
    return btsFind(node.right, value);
  }
};
