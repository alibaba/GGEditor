import G6 from '@antv/g6';

import '@/shape';

import * as Util from '@/utils';

import Editor from '@/components/Editor';
import Flow from '@/components/Flow';
import Mind from '@/components/Mind';
import Command from '@/components/Command';
import ItemPanel, { Item } from '@/components/ItemPanel';
import DetailPanel from '@/components/DetailPanel';
import { RegisterNode, RegisterEdge, RegisterCommand, RegisterBehavior } from '@/components/Register';
import { withEditorContext } from '@/components/EditorContext';
import { baseCommand } from '@/components/Graph/command/base';

import ItemPopover from '@/plugins/ItemPopover';
import ContextMenu from '@/plugins/ContextMenu';
import EditableLabel from '@/plugins/EditableLabel';

import global from '@/common/global';
import * as constants from '@/common/constants';
import CommandManager from '@/common/CommandManager';
import behaviorManager from '@/common/behaviorManager';

import { setAnchorPointsState } from '@/shape/common/anchor';

export {
  G6,
  Util,
  Flow,
  Mind,
  Command,
  Item,
  ItemPanel,
  DetailPanel,
  RegisterNode,
  RegisterEdge,
  RegisterCommand,
  RegisterBehavior,
  withEditorContext,
  baseCommand,
  ItemPopover,
  ContextMenu,
  EditableLabel,
  global,
  constants,
  CommandManager,
  behaviorManager,
  setAnchorPointsState,
};

export default Editor;
