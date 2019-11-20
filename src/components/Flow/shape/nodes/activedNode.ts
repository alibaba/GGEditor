import globalStyle from '../../common/globalStyle';
import FSM, { StateTable } from '../../common/stateMachine';
const { nodeStyle, nodeActivedStyle, nodeSelectedStyle, startNodeStyle } = globalStyle;

type Events = 'hover' | 'click' | 'leave' | 'clickOther' | 'brush';
type States = 'normal' | 'actived' | 'selected';

// 选中时改变边框颜色
export function drawActivedNode(name: string, value: boolean, item: any) {
  // 每个 item 上挂个 FSM
  if (!item.fsm) item.fsm = FSM('normal');
  const fsm: FSM<States, Events> = item.fsm;

  const normalStyle = () => {
    const shape = item.getKeyShape().baseType;
    // 恢复原本样式
    if (shape == 'startNode' || shape == 'endNode') item.get('keyShape').attr({ ...startNodeStyle });
    else item.get('keyShape').attr({ ...nodeStyle });
  };

  const hoverStyle = () => item.get('keyShape').attr({ ...nodeActivedStyle });

  const selectedStyle = () => item.get('keyShape').attr({ ...nodeActivedStyle, ...nodeSelectedStyle });

  const stateTable: StateTable<Events, States> = [
    { e: 'hover', f: 'normal', t: 'actived', action: hoverStyle },
    { e: 'leave', f: 'actived', t: 'normal', action: normalStyle },
    { e: 'click', t: 'selected', action: selectedStyle },
    { e: 'clickOther', t: 'normal', action: normalStyle },
  ];
  fsm.setStateTable(stateTable);

  // 处于拖拽状态的节点，所有 action 都禁止执行
  if (name === 'addingSource' && value) fsm.canExecAction(false);
  if (name === 'addingSource' && !value) fsm.canExecAction(true);
  // 鼠标停留时的样式
  if (name === 'active' && value) fsm.transtion('hover');
  if (name === 'active' && !value) fsm.transtion('leave');
  if (name === 'selected' && value) fsm.transtion('click');
  if (name === 'selected' && !value) fsm.transtion('clickOther');
}
