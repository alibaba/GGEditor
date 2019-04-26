import React from 'react';
import { pick } from '@utils';

class Graph extends React.Component {
  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  initGraph() {
    const { containerId, initGraph, data } = this.props;
    const { clientWidth, clientHeight } = document.getElementById(containerId);

    this.graph = initGraph({
      width: clientWidth,
      height: clientHeight,
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  }

  bindEvent() {

  }

  render() {
    const { containerId, children } = this.props;

    return (
      <div id={containerId} {...pick(this.props, ['className', 'style'])}>
        {children}
      </div>
    );
  }
}

export default Graph;
