import uuidv4 from 'uuid/v4';
import { Graph, GraphNativeEvent, GraphEventHandle } from '@common/interface';

export isArray from 'lodash/isArray';
export pick from 'lodash/pick';
export upperFirst from 'lodash/upperFirst';

export function uuid() {
  return uuidv4().replace(/-/g, '');
}

export function addListener(target: Graph, eventName: GraphNativeEvent, handler: GraphEventHandle | undefined) {
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
