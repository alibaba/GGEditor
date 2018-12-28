import { version } from '@common/version';

const global = {
  trackable: process.env.NODE_ENV === 'production',
  version,
};

export default {
  get(key) {
    return global[key];
  },
  set(key, value) {
    global[key] = value;
  },
};
