import React from 'react';
import PropTypes from 'prop-types';
import Editor from '@components/Base/Editor';
import {
  EDITOR_EVENTS,
  EDITOR_REACT_EVENTS,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE,
} from '@common/constants';
import { pick } from '@utils';
import PropsAPI from '@components/Adapter/propsAPI';
import Global from '@common/Global';

class GGEditor extends React.Component {
  static childContextTypes = {
    editor: PropTypes.object,
    propsAPI: PropTypes.object,
    onBeforeAddPage: PropTypes.func,
    onAfterAddPage: PropTypes.func,
  };

  static setTrackable(value) {
    Global.set('trackable', Boolean(value));
  }

  editor = null;

  get currentPage() {
    return this.editor.getCurrentPage();
  }

  constructor(props) {
    super(props);

    this.init();
    this.bindEvent();
  }

  getChildContext() {
    return {
      editor: this.editor,
      propsAPI: this.propsAPI,
      onBeforeAddPage: this.handleBeforeAddPage,
      onAfterAddPage: this.handleAfterAddPage,
    };
  }

  addListener = (target, eventName, handler) => {
    if (typeof handler === 'function') target.on(eventName, handler);
  };

  handleBeforeAddPage = (func) => {
    this.editor.on(EVENT_BEFORE_ADD_PAGE, func);
  };

  handleAfterAddPage = (func) => {
    const { currentPage: page } = this;

    if (page) {
      func({ page });
      return;
    }

    this.editor.on(EVENT_AFTER_ADD_PAGE, func);
  };

  init() {
    this.editor = new Editor();
    this.propsAPI = new PropsAPI(this.editor);
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

    return <div {...pick(this.props, ['style', 'className'])}>{children}</div>;
  }
}

export default GGEditor;
