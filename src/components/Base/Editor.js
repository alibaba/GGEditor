import G6Editor from '@antv/g6-editor';
import { EVENT_BEFORE_ADD_PAGE } from '@common/constants';
import track from '@helpers/track';
import { createId } from '@utils';

export default class Editor extends G6Editor {
  constructor(options) {
    super(options);

    this.id = createId();
    this.on(EVENT_BEFORE_ADD_PAGE, ({ className }) => track({ c1: className }));
  }
}
