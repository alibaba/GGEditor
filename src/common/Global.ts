interface Global {
  /** 当前版本 */
  version: string;
  /** 埋点开关 */
  trackable: boolean;
}

const global: Global = {
  version: process.env.GG_EDITOR_VERSION,
  trackable: true,
};

export default {
  /** 获取当前版本 */
  getVersion() {
    return global.version;
  },

  /** 设置当前版本 */
  setVersion(version: string) {
    global.version = version;
  },

  /** 获取埋点开关 */
  getTrackable() {
    return global.trackable;
  },

  /** 设置埋点开关 */
  setTrackable(trackable: boolean) {
    global.trackable = trackable;
  },
};
