import React from 'react';
import { pick } from '@utils';
import { STATUS_CANVAS_SELECTED, EVENT_AFTER_ADD_PAGE } from '@common/constants';
import BaseComponent from '@components/Base';
import Pannel from './pannel';

class DetailPannel extends BaseComponent {
  state = {
    status: '',
  }

  componentWillMount() {
    const { editor } = this.context;

    editor.on(EVENT_AFTER_ADD_PAGE, () => {
      this.setState({ status: STATUS_CANVAS_SELECTED });
      this.bindEvent();
    });
  }

  get page() {
    return this.context.editor.getCurrentPage();
  }

  bindEvent() {
    this.page.on('statuschange', ({ status }) => { this.setState({ status }); });
  }

  render() {
    const { getSelected } = this.context.propsAPI;
    const { children } = this.props;
    const { status } = this.state;

    if (!status) {
      return null;
    }

    return (
      <div {...pick(this.props, ['style', 'className'])}>
        {
          React.Children.toArray(children).map(child => React.cloneElement(child, {
            status,
            items: getSelected(),
          }))
        }
      </div>
    );
  }
}

export const NodePannel = Pannel.create('node');
export const EdgePannel = Pannel.create('edge');
export const GroupPannel = Pannel.create('group');
export const MultiPannel = Pannel.create('multi');
export const CanvasPannel = Pannel.create('canvas');

export default DetailPannel;
