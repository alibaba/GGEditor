import GGEditor from '@/components/GGEditor';
import Flow from '@/components/Flow';
import Mind from '@/components/Mind';
import Command from '@/components/Command';
import ItemPanel, { Item } from '@/components/ItemPanel';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from '@/components/DetailPanel';
import ContextMenu, { NodeMenu } from '@/components/ContextMenu';
import { RegisterNode, RegisterEdge, RegisterCommand, RegisterBehavior } from '@/components/Register';
import ItemPopover from '@/plugins/ItemPopover';
import { withEditorContext } from '@/common/context/EditorContext';

export {
  Flow,
  Mind,
  Command,
  Item,
  ItemPanel,
  NodePanel,
  EdgePanel,
  MultiPanel,
  CanvasPanel,
  NodeMenu,
  ContextMenu,
  RegisterNode,
  RegisterEdge,
  RegisterCommand,
  RegisterBehavior,
  ItemPopover,
  withEditorContext,
};

export default GGEditor;
