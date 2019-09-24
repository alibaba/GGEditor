import React from 'react';
import G6 from '@antv/g6';
import { uuid, recursiveTraversal } from '../../utils';
import { MIND_CONTAINER_ID, ShapeClassName, LabelState } from '../../common/constants';
import { GraphReactEventProps } from '../../common/interface';
import { withEditorPrivateContext } from '../../common/context/EditorPrivateContext';
import Graph from '../Graph';

import './shape';
import './command';
import './behavior';

interface MindProps extends GraphReactEventProps {
  customModes?: (mode: string, behaviors: any) => object;
}

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
    const { customModes } = this.props;

    const modes: any = {
      default: {
        'click-item': {
          type: 'click-item',
          multiple: false,
        },
        'collapse-expand': {
          type: 'collapse-expand',
          shouldBegin: this.canCollapseExpand,
        },
        'context-menu': 'context-menu',
        'drag-canvas': {
          type: 'drag-canvas',
          shouldBegin: this.canDragCanvas,
          shouldUpdate: this.canDragCanvas,
          shouldEnd: this.canDragCanvas,
        },
        'edit-label': 'edit-label',
        'hover-item': 'hover-item',
        'recall-edge': 'recall-edge',
        'zoom-canvas': {
          type: 'zoom-canvas',
          shouldUpdate: this.canZoomCanvas,
        },
      },
    };

    Object.keys(modes).forEach(mode => {
      const behaviors = modes[mode];

      modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
    });

    this.graph = new G6.TreeGraph({
      container: containerId,
      width,
      height,
      modes,
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
