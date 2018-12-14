/* global GG_EDITOR_VERSION */

const global = {
  trackable: process.env.NODE_ENV === 'production',
  version: GG_EDITOR_VERSION,
};

export default {
  get(key) {
    return global[key];
  },
  set(key, value) {
    global[key] = value;
  },
};
