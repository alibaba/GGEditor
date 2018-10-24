const global = {
  trackable: process.env.NODE_ENV === 'production',
};

export default {
  get(key) {
    return global[key];
  },
  set(key, value) {
    global[key] = value;
  },
};
