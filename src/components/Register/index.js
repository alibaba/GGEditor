import React from 'react';
import G6 from '@antv/g6';
import upperFirst from 'lodash/upperFirst';
import commandManager from '@common/commandManager';

class Register extends React.Component {
  static create = function (type) {
    class TypedRegister extends Register {
      constructor(props) {
        super(props, type);
      }
    }

    return TypedRegister;
  }

  constructor(props, type) {
    super(props);

    const { name, config, extend } = props;

    if (type === 'command') {
      commandManager.register({
        name,
        config,
        extend,
      });

      return;
    }

    G6[`register${upperFirst(type)}`](name, config, extend);
  }

  render() {
    return null;
  }
}

export const RegisterNode = Register.create('node');
export const RegisterEdge = Register.create('edge');
export const RegisterCommand = Register.create('command');
export const RegisterBehavior = Register.create('behavior');
