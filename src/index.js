import GGEditor from '@components/GGEditor';
import Mind from '@components/Mind';
import Command from '@components/Command';
import {
  NodePanel,
  MultiPanel,
  CanvasPanel,
} from '@components/Panel';
import {
  RegisterNode,
  RegisterEdge,
  RegisterCommand,
  RegisterBehavior,
} from '@components/Register';
import withEditorContext from '@common/EditorContext/withEditorContext';

export {
  Mind,
  Command,
  NodePanel,
  MultiPanel,
  CanvasPanel,
  RegisterNode,
  RegisterEdge,
  RegisterCommand,
  RegisterBehavior,
  withEditorContext,
};

export default GGEditor;
