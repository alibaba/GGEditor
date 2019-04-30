import React from 'react';
import pick from 'lodash/pick';
import withEditorContext from '@common/EditorContext/withEditorContext';

import './command';
import './behavior';

class Graph extends React.Component {
  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  initGraph() {
    const { containerId, parseData, initGraph, editor } = this.props;
    const { clientWidth, clientHeight } = document.getElementById(containerId);

    // Parse data
    const data = { ...this.props.data };

    parseData({ data });

    // Init Graph
    const graph = initGraph({
      width: clientWidth,
      height: clientHeight,
    });

    graph.data(data);
    graph.render();
    graph.fitView();

    editor.initGraph({
      graph,
    });
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

export default withEditorContext(Graph);
