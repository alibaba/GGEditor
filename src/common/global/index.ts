import { NodeModel } from '@/common/interfaces';

class Global {
  /** 当前版本 */
  version: string = process.env.GG_EDITOR_VERSION;

  /** 埋点开关 */
  trackable = true;

  /** 剪贴板 */
  clipboard: {
    point: {
      x: number;
      y: number;
    };
    models: NodeModel[];
  } = {
    point: {
      x: 0,
      y: 0,
    },
    models: [],
  };

  /** 元素浮层插件状态 */
  itemPopoverState: 'show' | 'hide';

  /** 右键菜单插件状态 */
  contextMenuState: 'show' | 'hide';

  /** 标签编辑插件状态 */
  editableLabelState: 'show' | 'hide';
}

export default new Global();
