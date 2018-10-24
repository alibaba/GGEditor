import G6Editor from '@antv/g6-editor';
import { createId } from '@utils';
import Global from '@common/Global';

export default class Editor extends G6Editor {
  constructor(options) {
    super(options);

    const trackable = Global.get('trackable');

    if (trackable) {
      G6Editor.track({
        GGEditor: true,
      });
    } else {
      G6Editor.track(false);
    }

    this.id = createId();
  }
}
