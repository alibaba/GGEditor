import React from 'react';
import G6 from '@antv/g6';
import { Command, Behavior } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/components/EditorContext';

interface RegisterProps extends EditorPrivateContextProps {
  name: string;
  config: object;
  extend?: string;
}
interface RegisterState {}

class Register extends React.Component<RegisterProps, RegisterState> {
  static create = function(type: string) {
    class TypedRegister extends Register {
      constructor(props: RegisterProps) {
        super(props, type);
      }
    }

    return withEditorPrivateContext(TypedRegister);
  };

  constructor(props: RegisterProps, type: string) {
    super(props);

    const { name, config, extend, commandManager } = props;

    switch (type) {
      case 'node':
        G6.registerNode(name, config, extend);
        break;

      case 'edge':
        G6.registerEdge(name, config, extend);
        break;

      case 'command':
        commandManager.register(name, config as Command);
        break;

      case 'behavior':
        behaviorManager.register(name, config as Behavior);
        break;

      default:
        break;
    }
  }

  render() {
    return null;
  }
}

export const RegisterNode = Register.create('node');
export const RegisterEdge = Register.create('edge');
export const RegisterCommand = Register.create('command');
export const RegisterBehavior = Register.create('behavior');
