import G6 from '@antv/g6';
import { ItemState, NODE_MAX_TEXT_LINE_WIDTH, ShapeClassName } from '@common/constants';
import Util from './util';
import { Group, Item, NodeModel, CustomNode, Shape, Node, MindNodeModel } from '@common/interface';

export interface BizNode extends CustomNode {
  keyShape: Shape | null;

  label: Shape | null;

  wrapper: Shape | null;

  appendix: Shape | null;
}

export const bizOption: BizNode = {
  keyShape: null,
  label: null,
  wrapper: null,
  appendix: null,

  showMenuIcon() {
    return true;
  },

  /**
   * internal method
   * */
  draw(model, group) {
    this.drawWrapper(model, group);
    const keyShape = this.drawKeyShape(model, group);
    this.drawLabel(model, group);

    if (this.showMenuIcon()) {
      this.drawAppendix(model, group);
    }

    this.adjustPosition({ model, group });
    return keyShape;
  },

  drawAppendix(model: NodeModel, group: Group) {
    if (model.x > 0) {
      this.appendix = group.addShape('image', {
        className: ShapeClassName.Appendix,
        attrs: {
          img:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoNTgydjQwMkgtMXoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGNEY2RjgiIGQ9Ik0wIDBoMTRhNiA2IDAgMCAxIDYgNnY2SDZhNiA2IDAgMCAxLTYtNlYweiIvPjxnIGZpbGw9IiNBQUI1QzUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE0LjUgOCkiPjxjaXJjbGUgcj0iMS41IiBjeT0iNyIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxMiIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxNyIgY3g9IjEyIi8+PC9nPjwvZz48L3N2Zz4=',
          x: 0,
          y: 0,
          width: 20,
          cursor: 'pointer',
        },
      });
    } else {
      this.appendix = group.addShape('image', {
        className: ShapeClassName.Appendix,
        attrs: {
          img:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoNTgydjQwMkgtMXoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGNEY2RjgiIGQ9Ik0yMCAwSDZhNiA2IDAgMCAwLTYgNnY2aDE0YTYgNiAwIDAgMCA2LTZWMHoiLz48ZyBmaWxsPSIjQUFCNUM1IiB0cmFuc2Zvcm09Im1hdHJpeCgwIDEgMSAwIDMgNCkiPjxjaXJjbGUgcj0iMS41IiBjeT0iMS41IiBjeD0iMS41Ii8+PGNpcmNsZSByPSIxLjUiIGN5PSI2LjUiIGN4PSIxLjUiLz48Y2lyY2xlIHI9IjEuNSIgY3k9IjExLjUiIGN4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==',
          x: 0,
          y: 0,
          width: 20,
          cursor: 'pointer',
        },
      });
    }
  },

  drawKeyShape(model: NodeModel, group: Group) {
    const keyShapeType = 'rect';
    const keyShapeDefaultStyle = this[`get${ShapeClassName.KeyShape}defaultStyle`]();
    this.keyShape = group.addShape(keyShapeType, {
      className: ShapeClassName.KeyShape,
      attrs: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        ...keyShapeDefaultStyle,
      },
    });
    return this.keyShape;
  },

  drawWrapper(model: NodeModel, group: Group) {
    this.wrapper = group.addShape('rect', {
      className: ShapeClassName.Wrapper,
      attrs: {
        width: 20,
        height: 20,
        x: 0,
        y: 0,
        fill: '#6580EB',
        radius: [8, 6, 6, 8],
        ...this[`get${ShapeClassName.Wrapper}defaultStyle`](),
      },
    });
    return this.wrapper;
  },

  drawLabel(model: NodeModel, group: Group) {
    const labelDefaultStyle = this[`get${ShapeClassName.Label}defaultStyle`]();
    // draw label
    this.label = group.addShape('text', {
      className: ShapeClassName.Label,
      attrs: {
        text: model.label,
        x: 0,
        y: 0,
        ...labelDefaultStyle,
        // textBaseline is static, for the sake of adjusting position
        textBaseline: 'middle',
      },
    });
    // change text content according to text line width
    const { text, fontWeight, fontFamily, fontSize, fontStyle, fontVariant } = this.label.attr();
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    this.label.attr('text', Util.optimizeMultilineText(text, font, this.getMaxTextLineWidth()));
    return this.label;
  },

  /**
   * internal method
   * */
  afterDraw(nextModel: NodeModel, group) {
    let label = group.findByClassName(ShapeClassName.Label);
    // repaint label
    label.remove();
    label = this.drawLabel(nextModel, group);
    this.adjustPosition({ group, model: nextModel });
  },

  /**
   * internal method
   * */
  setState(name, value, item) {
    this.setStateStyle(item);
    // this.adjustPosition({ item });
  },

  adjustPosition({ model, group }: { model: NodeModel; group: Group }) {
    const keyShape = group.findByClassName(ShapeClassName.KeyShape);
    const originKeyShapeWidth = keyShape.attr('width');
    const label = group.findByClassName(ShapeClassName.Label);
    const wrapper = group.findByClassName(ShapeClassName.Wrapper);
    const appendix = group.findByClassName(ShapeClassName.Appendix);
    const keyShapeSize = this.adjustKeyShape({ label, keyShape });

    if (wrapper) {
      this.adjustWrapper({ keyShapeSize, keyShape, label, wrapper, model });
    }

    if (label) {
      this.adjustLabel({ keyShapeSize, keyShape, label, wrapper, model });
    }

    if (appendix) {
      this.adjustAppendix({ keyShapeSize, appendix, model });
    }

    if (originKeyShapeWidth === 0) {
      this.resetCoordinate({ keyShapeSize, group, model });
    }
  },

  adjustKeyShape({ label, keyShape }: { label: Shape; keyShape: Shape }) {
    keyShape.attr({
      width: label.getBBox().width + 20,
      height: label.getBBox().height + 20,
    });
    return {
      width: keyShape.attr('width'),
      height: keyShape.attr('height'),
    };
  },

  adjustAppendix({ keyShapeSize, appendix, model }: { keyShapeSize: any; appendix: Shape; model: NodeModel }) {
    const { width: keyShapeWidth, height: keyShapeHeight } = keyShapeSize;
    if (!model) return;
    if (model.x > 0) {
      appendix.attr('x', keyShapeWidth - appendix.attr('width') - 0.5);
      appendix.attr('y', 0.5);
    } else {
      appendix.attr('x', -keyShapeWidth + 0.5);
      appendix.attr('y', 0.5);
    }
  },

  /**
   * 节点文本坐标原点放在中心
   * 脑图左侧节点关键形坐标原点在右上，右侧在左上
   * */
  resetCoordinate({ keyShapeSize, group, model }: { keyShapeSize: any; group: Group; model: MindNodeModel }) {
    const keyShape = group.findByClassName(ShapeClassName.KeyShape);
    const wrapper = group.findByClassName(ShapeClassName.Wrapper);
    const label = group.findByClassName(ShapeClassName.Label);
    const appendix = group.findByClassName(ShapeClassName.Appendix);
    if (model.x <= 0) {
      keyShape.translate(-keyShape.attr('width'), 0);
    }
  },

  adjustLabel({ keyShapeSize, label, model }: { keyShapeSize: any; label: Shape; model: MindNodeModel }) {
    const { width: keyShapeWidth, height: keyShapeHeight } = keyShapeSize;
    const labelWidth = label.getBBox().width;
    if (model.x > 0) {
      label.attr('x', (keyShapeWidth - labelWidth) / 2);
      label.attr('y', keyShapeHeight / 2);
    } else {
      label.attr({
        x: -keyShapeWidth + 10,
        y: keyShapeHeight / 2,
      });
    }
  },

  adjustWrapper({ model, keyShapeSize, wrapper }: { model: NodeModel; keyShapeSize: any; wrapper: Shape }) {
    const { width: keyShapeWidth, height: keyShapeHeight } = keyShapeSize;
    if (!model) return;
    // keyShape has stroke with 1 width, so make wrapper's height plus 1
    wrapper.attr('height', keyShapeHeight + 1);

    wrapper.attr('width', keyShapeWidth);

    wrapper.attr('y', -0.5);
    if (model.x > 0) {
      wrapper.attr('x', -4);
    } else {
      wrapper.attr({
        x: -keyShapeWidth + 4,
      });
    }
  },

  setStateStyle(item: Item) {
    const statesArr = item.getStates();
    const group = item.getContainer();
    const allChildren = group.get('children');

    allChildren.forEach((shape: Shape) => {
      const className = shape.get('className');

      let statesStyle = {};
      statesArr.forEach(stateName => {
        statesStyle = {
          ...statesStyle,
          ...(this[`get${className}${stateName}Style`] && this[`get${className}${stateName}Style`]()),
        };
      });

      shape.attr({
        ...(this[`get${className}defaultStyle`] && this[`get${className}defaultStyle`]()),
        ...statesStyle,
      });
    });
  },

  [`get${ShapeClassName.KeyShape}defaultStyle`]() {
    return {
      fill: '#fff',
      radius: 6,
      stroke: '#6580EB',
    };
  },

  [`get${ShapeClassName.KeyShape}activeStyle`]() {
    return {
      fill: '#e9e5ff',
    };
  },

  [`get${ShapeClassName.KeyShape}errorStyle`]() {
    return {
      stroke: 'red',
    };
  },

  [`get${ShapeClassName.KeyShape}selectedStyle`]() {
    return {
      fill: '#e9e5ff',
    };
  },

  [`get${ShapeClassName.Wrapper}defaultStyle`]() {
    return {
      fill: '#6580EB',
    };
  },

  [`get${ShapeClassName.Wrapper}selectedStyle`]() {
    return {
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      shadowBlur: 10,
      shadowColor: '#ccc',
    };
  },

  [`get${ShapeClassName.Wrapper}errorStyle`]() {
    return {
      fill: 'red',
    };
  },

  [`get${ShapeClassName.Label}defaultStyle`]() {
    return {
      fill: '#000',
    };
  },

  getMaxTextLineWidth() {
    return NODE_MAX_TEXT_LINE_WIDTH;
  },

  getAnchorPoints() {
    return [[0, 0], [0, 0]];
  },
};

G6.registerNode('biz-node', bizOption);
