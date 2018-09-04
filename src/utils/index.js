import pick from 'lodash/pick';
import merge from 'lodash/merge';
import mapKeys from 'lodash/mapKeys';
import upperFirst from 'lodash/upperFirst';

const createCounter = (count = 0) => () => count++;
const createId = createCounter();

const toQueryString = obj => Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');

export {
  createId,
  mapKeys,
  merge,
  pick,
  upperFirst,
  toQueryString,
};
