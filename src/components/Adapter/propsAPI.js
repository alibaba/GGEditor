let editor;

class PropsAPI {
  constructor(_editor) {
    editor = _editor;
  }

  get currentPage() {
    return editor.getCurrentPage();
  }

  read = data => this.currentPage.read(data);
  save = () => this.currentPage.save();

  add = (type, model) => this.currentPage.add(type, model);
  find = id => this.currentPage.find(id);
  update = (item, model) => this.currentPage.update(item, model);
  remove = item => this.currentPage.remove(item);

  getSelected = () => this.currentPage.getSelected();
}

export default PropsAPI;
