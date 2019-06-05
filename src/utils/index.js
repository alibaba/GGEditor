import uuidv4 from 'uuid/v4';

export isArray from 'lodash/isArray';
export pick from 'lodash/pick';
export upperFirst from 'lodash/upperFirst';

export function uuid() {
  return uuidv4().replace(/-/g, '');
}

export function addListener(target, eventName, handler) {
  if (typeof handler === 'function') {
    target.on(eventName, handler);
  }
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
