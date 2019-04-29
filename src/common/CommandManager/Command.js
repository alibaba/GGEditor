class Command {
  constructor({ name, params, editor }) {
    this.name = name;
    this.params = params;
    this.editor = editor;
  }

  enable() {
    return true;
  }

  init() {}

  exec() {}

  back() {}

  queue() {
    return true;
  }

  shortcut() {
    return [];
  }
}

export default Command;
