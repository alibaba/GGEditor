class PropsAPI {
  editor = null;

  constructor(editor) {
    this.editor = editor;

    ['read', 'save', 'add', 'find', 'update', 'remove', 'getSelected'].forEach((key) => {
      this[key] = (...params) => this.currentPage[key](...params);
    });
  }

  get currentPage() {
    return this.editor.getCurrentPage();
  }
}

export default PropsAPI;
