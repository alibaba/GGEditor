class Command {
  constructor({ name, params, editor }) {
    this.name = name;
    this.params = params;
    this.editor = editor;
  }

  isEnable() {
    return true;
  }

  init() {}

  exec() {}

  back() {}

  isJoinQueue() {
    return true;
  }

  getShortcut() {
    return [];
  }
}

export default Command;
