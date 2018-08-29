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
    this.bindKeyUpEditLabel();
  }

  bindKeyUpEditLabel() {
    const editLabel = this.page.get('labelTextArea');

    editLabel.on('keyup', (e) => {
      e.stopPropagation();

      const item = editLabel.focusItem;
      const text = editLabel.textContent;

      this.page.emit('keyUpEditLabel', {
        item,
        text,
      });
    });
  }
}

export default Mind;
