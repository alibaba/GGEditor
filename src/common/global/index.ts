class Global {
  /** 当前版本 */
  version: string = process.env.GG_EDITOR_VERSION;

  /** 埋点开关 */
  trackable = true;
}

export default new Global();
