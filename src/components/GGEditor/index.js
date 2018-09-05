import React from 'react';
import PropTypes from 'prop-types';
import Editor from '@components/Base/Editor';
import { EDITOR_EVENTS, EDITOR_REACT_EVENTS } from '@common/constants';
import { pick, createId } from '@utils';
import PropsAPI from '@components/Adapter/propsAPI';
import Global from '@common/Global';

class GGEditor extends React.Component {
  static childContextTypes = {
    editor: PropTypes.object,
    editorId: PropTypes.number,
    propsAPI: PropTypes.object,
  }

  static setTrackable(value) {
    Global.set('trackable', Boolean(value));
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
      propsAPI: this.propsAPI,
    };
  }

  init() {
    this.editor = new Editor();
    this.propsAPI = new PropsAPI(this.editor);
  }

  addListener = (target, eventName, handler) => {
    if (typeof handler === 'function') target.on(eventName, handler);
  }

  bindEvent() {
    EDITOR_EVENTS.forEach((event) => {
      this.addListener(this.editor, [event], this.props[EDITOR_REACT_EVENTS[event]]);
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
