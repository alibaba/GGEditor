import Editor from '@components/Base/Editor';
import {
  FLOW_CONTAINER,
  FLOW_CLASS_NAME,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE,
} from '@common/constants';
import Page from '@components/Page';

class Flow extends Page {
  static defaultProps = {
    data: {
      nodes: [],
      edges: [],
    },
  }

  get pageId() {
    const { editorId } = this.context;

    return `${FLOW_CONTAINER}_${editorId}`;
  }

  initPage() {
    const { editor } = this.context;

    editor.emit(EVENT_BEFORE_ADD_PAGE, { className: FLOW_CLASS_NAME });

    this.page = new Editor.Flow(this.config);

    editor.add(this.page);

    editor.emit(EVENT_AFTER_ADD_PAGE, { page: this.page });
  }
}

export default Flow;
