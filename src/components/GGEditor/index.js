import React from 'react';
import PropTypes from 'prop-types';
import Editor from '@antv/g6-editor';
import { EDITOR_EVENTS } from '@common/constants';
import { pick, upperFirst, createId } from '@utils';

class GGEditor extends React.Component {
  static childContextTypes = {
    editor: PropTypes.object,
    editorId: PropTypes.number,
    getCurrentPage: PropTypes.func,
    getSelected: PropTypes.func,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
    findItem: PropTypes.func,
  }

  editor = null;

  editorId = createId();

  constructor(props) {
    super(props);

    this.init();
    this.bindEvent();
  }

  getChildContext() {
    return {
      editor: this.editor,
      editorId: this.editorId,
      getCurrentPage: this.getCurrentPage,
      getSelected: this.getSelected,
      addItem: this.addItem,
      removeItem: this.removeItem,
      updateItem: this.updateItem,
      findItem: this.findItem,
    };
  }

  get page() {
    return this.editor.getCurrentPage();
  }

  getCurrentPage = () => this.page;

  getSelected = () => this.page.getSelected();

  addItem = (type, model) => this.page.add(type, model);

  removeItem = item => this.page.remove(item);

  updateItem = (item, model) => this.page.update(item, model);

  findItem = id => this.page.find(id);

  init() {
    this.editor = new Editor();
  }

  bindEvent() {
    EDITOR_EVENTS.forEach((event) => {
      const handleEvent = this.props[(`on${upperFirst(event)}`)];

      if (handleEvent) {
        this.editor.on([event], handleEvent);
      }
    });
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    const { children } = this.props;

    return (
      <div {...pick(this.props, ['style', 'className'])}>
        {children}
      </div>
    );
  }
}

export default GGEditor;
