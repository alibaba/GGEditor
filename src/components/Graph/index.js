import React from 'react';
import { pick } from '@utils';
import withEditorContext from '@common/context/EditorContext/withEditorContext';

class Graph extends React.Component {
  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  initGraph() {
    const { containerId, initGraph, data, editor } = this.props;
    const { clientWidth, clientHeight } = document.getElementById(containerId);

    const graph = initGraph({
      width: clientWidth,
      height: clientHeight,
    });

    graph.data(data);
    graph.render();
    graph.fitView();

    editor.init({
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
