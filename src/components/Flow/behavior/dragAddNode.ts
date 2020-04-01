import isArray from 'lodash/isArray';
import { guid } from '@/utils';
import global from '@/common/global';
import { ItemType, GraphType, GraphMode, EditorCommand } from '@/common/constants';
import { GShape, GGroup, NodeModel, Behavior, GraphEvent } from '@/common/interfaces';
import CommandManager from '@/common/CommandManager';
import behaviorManager from '@/common/behaviorManager';

interface DragAddNodeBehavior extends Behavior {
  shape: GShape | null;
  handleCanvasMouseEnter(e: GraphEvent): void;
  handleMouseMove(e: GraphEvent): void;
  handleMouseUp(e: GraphEvent): void;
}

const dragAddNodeBehavior: DragAddNodeBehavior = {
  shape: null,

  graphType: GraphType.Flow,

  graphMode: GraphMode.AddNode,

  getEvents() {
    return {
      'canvas:mouseenter': 'handleCanvasMouseEnter',
      mousemove: 'handleMouseMove',
      mouseup: 'handleMouseUp',
    };
  },

  handleCanvasMouseEnter(e) {
    const { graph, shape } = this;

    if (shape) {
      return;
    }

    const group: GGroup = graph.get('group');
    const model: Partial<NodeModel> = global.component.itemPanel.model;

    const { size = 100 } = model;

    let width = 0;
    let height = 0;

    if (isArray(size)) {
      width = size[0];
      height = size[1];
    } else {
      width = size;
      height = size;
    }

    const x = e.x - width / 2;
    const y = e.y - height / 2;

    this.shape = group.addShape('rect', {
      className: global.component.itemPanel.delegateShapeClassName,
      attrs: {
        x,
        y,
        width,
        height,
        fill: '#f3f9ff',
        fillOpacity: 0.5,
        stroke: '#1890ff',
        strokeOpacity: 0.9,
        lineDash: [5, 5],
      },
    });

    graph.paint();
  },

  handleMouseMove(e) {
    const { graph } = this;
    const { width, height } = this.shape.getBBox();

    const x = e.x - width / 2;
    const y = e.y - height / 2;

    this.shape.attr({
      x,
      y,
    });

    graph.paint();
  },

  handleMouseUp(e) {
    const { graph } = this;
    const { width, height } = this.shape.getBBox();

    let x = e.x;
    let y = e.y;

    const model: Partial<NodeModel> = global.component.itemPanel.model;

    if (model.center === 'topLeft') {
      x -= width / 2;
      y -= height / 2;
    }

    this.shape.remove(true);

    const commandManager: CommandManager = graph.get('commandManager');

    commandManager.execute(graph, EditorCommand.Add, {
      type: ItemType.Node,
      model: {
        id: guid(),
        x,
        y,
        ...model,
      },
    });
  },
};

behaviorManager.register('drag-add-node', dragAddNodeBehavior);
