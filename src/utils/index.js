import uuidv4 from 'uuid/v4';

export function uuid() {
  return uuidv4().replace(/-/g, '');
}

export function recursiveTraversal(root, callback) {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => recursiveTraversal(item, callback));
}
