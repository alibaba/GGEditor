class PropsAPI {
  constructor(editor) {
    this.editor = editor;
  }

  get activePage() {
    return this.editor.getCurrentPage();
  }

  getSelected = () => this.activePage.getSelected();
  addItem = (type, model) => this.activePage.add(type, model);
  removeItem = item => this.activePage.remove(item);
  updateItem = (item, model) => this.activePage.update(item, model);
  findItem = id => this.activePage.find(id);
}

export default PropsAPI;
