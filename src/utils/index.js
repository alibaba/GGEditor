import pick from 'lodash/pick';
import merge from 'lodash/merge';
import mapKeys from 'lodash/mapKeys';
import upperFirst from 'lodash/upperFirst';

const createCounter = (count = 0) => () => count++;
const createId = createCounter();

export {
  createId,
  mapKeys,
  merge,
  pick,
  upperFirst,
};
