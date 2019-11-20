interface Transtion<Events, States> {
  name?: string;
  e: Events; // 事件名
  f?: States; // 当前状态
  t: States; // 下一状态
  preAction?: Function; // 状态转换前执行动作
  action?: Function; // 状态转换后的执行动作
}

// 状态表要能描述当前状态可达到的状态
// 当前状态到下一状态的条件
// 当前状态到下一状态要执行的动作
// 支持状态嵌套，层级状态机
// 要清晰

export type StateTable<Events, States> = Transtion<Events, States>[];

interface FSM<States, Events> {
  getState: () => States;
  setStateTable: (t: StateTable<Events, States>) => void;
  setAction: (key: number | string, action: Function) => void;
  setPreAction: (key: number | string, preAction: Function) => void;
  transtion: (e: Events) => States;
  canExecAction: (v: boolean) => boolean;
  canChangeState: (v: boolean) => boolean;
}

const FSM = <States, Events>(initState: States, stateTable?: StateTable<Events, States>): FSM<States, Events> => {
  let currentState = initState;
  let table = stateTable;
  let canExecActionFlag = true;
  let canChangeStateFlag = true;

  const getState = () => currentState;

  const setStateTable = (t: StateTable<Events, States>) => {
    table = t;
  };

  const setAction = (key: number | string, action: Function) => {
    let transtion = null;
    if (typeof key === 'number') transtion = table[key];
    if (typeof key === 'string') transtion = table.find(t => t.name == key);
    if (action) transtion.action = action;
  };

  const setPreAction = (key: number | string, preAction: Function) => {
    let transtion = null;
    if (typeof key === 'number') transtion = table[key];
    if (typeof key === 'string') transtion = table.find(t => t.name == key);
    if (preAction) transtion.preAction = preAction;
  };

  const canExecAction = (v: boolean) => (canExecActionFlag = v);

  const canChangeState = (v: boolean) => (canChangeStateFlag = v);

  const transtion = (e: Events) => {
    if (!table) return;
    // 禁止状态改变意为着 action 也不会被执行
    if (!canChangeStateFlag) return;
    // 如果 t.f 为空，意味着可以从 any state -> next state
    const item = table.find(t => t.e === e && (t.f ? t.f === currentState : true));
    if (item) {
      canExecActionFlag && item.preAction && item.preAction();
      currentState = item.t;
      canExecActionFlag && item.action && item.action();
    }
    return currentState;
  };

  return {
    getState,
    setStateTable,
    setAction,
    setPreAction,
    transtion,
    canExecAction,
    canChangeState,
  };
};

export default FSM;
