/* global G6_VERSION, G6_EDITOR_VERSION, GG_EDITOR_VERSION */

const global = {
  trackable: process.env.NODE_ENV === 'production',
  versions: {
    g6: G6_VERSION,
    'g6-editor': G6_EDITOR_VERSION,
    'gg-editor': GG_EDITOR_VERSION,
  },
};

export default {
  get(key) {
    return global[key];
  },
  set(key, value) {
    global[key] = value;
  },
};
