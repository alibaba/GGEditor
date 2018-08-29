import Editor from '@antv/g6-editor';
import {
  MIND_CONTAINER,
  MIND_CLASS_NAME,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE,
} from '@common/constants';
import Page from '@components/Page';

class Mind extends Page {
  get pageId() {
    const { editorId } = this.context;

    return `${MIND_CONTAINER}_${editorId}`;
  }

  initPage() {
    const { editor } = this.context;

    editor.emit(EVENT_BEFORE_ADD_PAGE, { className: MIND_CLASS_NAME });

    this.page = new Editor.Mind(this.config);

    editor.add(this.page);

    editor.emit(EVENT_AFTER_ADD_PAGE);
  }

  bindEvent() {
    super.bindEvent();
    this.bindKeyupEditLabel();
  }

  bindKeyupEditLabel() {
    const editLabel = this.page.get('labelTextArea');
    const { focusItem: item, textContent: text } = editLabel;

    editLabel.on('keyup', (e) => {
      e.stopPropagation();
      this.page.emit('keyupeditlabel', { item, text });
    });
  }
}

export default Mind;
