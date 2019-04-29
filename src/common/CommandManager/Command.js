class Command {
  constructor({ name, params, editor }) {
    this.name = name;
    this.params = params;
    this.editor = editor;
  }

  queue = true;

  shortcut = [];

  enable() {
    return true;
  }

  init() {}

  exec() {}

  back() {}
}

export default Command;
