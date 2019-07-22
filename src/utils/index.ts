import uuidv4 from 'uuid/v4';
import { EditorEvent } from '@common/constants';
import { Graph, GraphNativeEvent, GraphEventHandle } from '@common/interface';

export function uuid() {
  return uuidv4().replace(/-/g, '');
}

export function addListener<T>(target: Graph, eventName: EditorEvent | GraphNativeEvent, handler: T | undefined) {
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
