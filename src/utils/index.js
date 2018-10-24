import pick from 'lodash/pick';
import merge from 'lodash/merge';
import upperFirst from 'lodash/upperFirst';

const createCounter = (count = 0) => () => count++;
const createId = createCounter();

export {
  createId,
  merge,
  pick,
  upperFirst,
};
