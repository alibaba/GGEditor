import React from 'react';
import G6 from '@antv/g6';
import { uuid, recursiveTraversal } from '../../utils';
import { MIND_CONTAINER_ID, ShapeClassName, LabelState } from '../../common/constants';
import {
  GraphCommonEventProps,
  GraphNodeEventProps,
  GraphEdgeEventProps,
  GraphCanvasEventProps,
  GraphCustomEventProps,
} from '../../common/interface';
import { EditorPrivateContextProps, withEditorPrivateContext } from '../../common/context/EditorPrivateContext';
import Graph from '../Graph';

import './shape';
import './command';

interface MindProps
  extends EditorPrivateContextProps,
    GraphCommonEventProps,
    GraphNodeEventProps,
    GraphEdgeEventProps,
    GraphCanvasEventProps,
    GraphCustomEventProps {}

interface MindState {}

class Mind extends React.Component<MindProps, MindState> {
  containerId: string;

  constructor(props: MindProps) {
    super(props);

    this.containerId = `${MIND_CONTAINER_ID}_${uuid()}`;
  }

  canDragCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  };

  canZoomCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  };

  canCollapseExpand = ({ target }) => {
    return target && target.get('className') === ShapeClassName.CollapseExpandButton;
  };

  parseData = data => {
    recursiveTraversal(data, item => {
      const { id } = item;

      if (id) {
        return;
      }

      item.id = uuid();
    });
  };

  initGraph = (width: number, height: number) => {
    const { containerId } = this;

    this.graph = new G6.TreeGraph({
      container: containerId,
      width,
      height,
      modes: {
        default: [
          {
            type: 'drag-canvas',
            shouldBegin: this.canDragCanvas,
            shouldUpdate: this.canDragCanvas,
            shouldEnd: this.canDragCanvas,
          },
          {
            type: 'zoom-canvas',
            shouldUpdate: this.canZoomCanvas,
          },
          {
            type: 'click-item',
            multiple: false,
          },
          'hover-item',
          'edit-label',
          'context-menu',
          'recall-edge',
          'brush-select',
          {
            type: 'collapse-expand',
            shouldBegin: this.canCollapseExpand,
          },
        ],
      },
      layout: {
        type: 'mindmap',
        direction: 'H',
        getHGap() {
          return 70;
        },
      },
      animate: false,
      defaultNode: {
        shape: 'mind-node',
      },
      defaultEdge: {
        shape: 'biz-mind-edge',
      },
    });

    return this.graph;
  };

  render() {
    const { containerId, parseData, initGraph } = this;

    return <Graph containerId={containerId} parseData={parseData} initGraph={initGraph} {...this.props} />;
  }
}

export default withEditorPrivateContext<MindProps>(Mind);
