import React from 'react';
import PropTypes from 'prop-types';
import Editor from '@antv/g6-editor';
import { EDITOR_EVENTS } from '@common/constants';
import { pick, upperFirst } from '@utils';
import Flow from '@components/Flow';
import Mind from '@components/Mind';
import Register, {
  RegisterNode,
  RegisterEdge,
  RegisterGroup,
  RegisterGuide,
  RegisterCommand,
  RegisterBehaviour,
} from '@components/Register';
import Command from '@components/Command';
import Minimap from '@components/Minimap';
import ContextMenu from '@components/ContextMenu';
import Toolbar from '@components/Toolbar';
import ItemPannel, { Item } from '@components/ItemPannel';
import DetailPannel, {
  NodePannel,
  EdgePannel,
  GroupPannel,
  MultiPannel,
  CanvasPannel,
} from '@components/DetailPannel';

let EDITOR_ID = 0;

function createId() {
  EDITOR_ID += 1;

  return EDITOR_ID;
}

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

export {
  Flow,
  Mind,
  Register,
  RegisterNode,
  RegisterEdge,
  RegisterGroup,
  RegisterGuide,
  RegisterCommand,
  RegisterBehaviour,
  Command,
  Minimap,
  ContextMenu,
  Toolbar,
  Item,
  ItemPannel,
  NodePannel,
  EdgePannel,
  GroupPannel,
  MultiPannel,
  CanvasPannel,
  DetailPannel,
};

export default GGEditor;
