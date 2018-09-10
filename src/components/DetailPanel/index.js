import React from 'react';
import { pick } from '@utils';
import { STATUS_CANVAS_SELECTED, EVENT_AFTER_ADD_PAGE } from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';
import Panel from './panel';

class DetailPanel extends BaseComponent {
  state = {
    status: '',
  }

  componentWillMount() {
    const { editor } = this.context;

    editor.on(EVENT_AFTER_ADD_PAGE, ({ page }) => {
      this.setState({
        status: STATUS_CANVAS_SELECTED,
      });

      this.bindEvent({
        page,
      });
    });
  }

  bindEvent({ page }) {
    page.on('statuschange', ({ status }) => {
      this.setState({ status });
    });
  }

  render() {
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
          }))
        }
      </div>
    );
  }
}

export const NodePanel = Panel.create('node');
export const EdgePanel = Panel.create('edge');
export const GroupPanel = Panel.create('group');
export const MultiPanel = Panel.create('multi');
export const CanvasPanel = Panel.create('canvas');

export default DetailPanel;
