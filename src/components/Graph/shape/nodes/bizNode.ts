import G6 from '@antv/g6';
import {
  ItemState,
  NODE_MAX_TEXT_LINE_WIDTH,
  ShapeClassName
} from '@common/constants';
import Util from './util';
import { Item, NodeModel } from "@common/interface";

export interface BizNode {
  keyShape: any;

  label: any;

  wrapper: any;

  appendix: any;

  // internal methods

  draw: (model: NodeModel, group: any) => any;

  update: (nextModel: NodeModel, item: Item) => void;

  setState: (name: ItemState, value: boolean, item: Item) => void;

  // custom methods
  [propName: string]: Function;
}

const bizOption: BizNode = {
  keyShape: null,
  label: null,
  wrapper: null,
  appendix: null,

  /**
   * internal method
   * */
  draw(model, group) {
    this.drawWrapper(model, group);
    const keyShape = this.drawKeyShape(model, group);
    this.drawLabel(model, group);
    this.drawAppendix(model, group);
    this.adjustPosition({ model, group });
    return keyShape;
  },

  drawAppendix(model: NodeModel, group) {
    if (model.x > 0) {
      this.appendix = group.addShape('image', {
        className: ShapeClassName.Appendix,
        attrs: {
          img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLjUuNVY2QTUuNSA1LjUgMCAwIDAgNiAxMS41aDEzLjVWNkE1LjUgNS41IDAgMCAwIDE0IC41SC41eiIgc3Ryb2tlPSIjOTc5Nzk3IiBmaWxsPSIjRjRGNkY4Ii8+PGcgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNi41IDEwLjUpIiBmaWxsPSIjQUFCNUM1Ij48Y2lyY2xlIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjEuNSIgY3k9IjYuNSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMS41IiBjeT0iMTEuNSIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=',
          x: 0,
          y: 0,
          width: 20,
        },
      });
    }
    else {
      this.appendix = group.addShape('image', {
        className: ShapeClassName.Appendix,
        attrs: {
          img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTkuNS41VjZhNS41IDUuNSAwIDAgMS01LjUgNS41SC41VjZBNS41IDUuNSAwIDAgMSA2IC41aDEzLjV6IiBzdHJva2U9IiM5Nzk3OTciIGZpbGw9IiNGNEY2RjgiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwIDEgMSAwIDMgNCkiIGZpbGw9IiNBQUI1QzUiPjxjaXJjbGUgY3g9IjEuNSIgY3k9IjEuNSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMS41IiBjeT0iNi41IiByPSIxLjUiLz48Y2lyY2xlIGN4PSIxLjUiIGN5PSIxMS41IiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==',
          x: 0,
          y: 0,
          width: 20,
        },
      });
    }
  },

  drawKeyShape(model: NodeModel, group) {
    const keyShapeType = 'rect';
    const keyShapeDefaultStyle = this[`get${ ShapeClassName.KeyShape }defaultStyle`]();
    this.keyShape = group.addShape(keyShapeType, {
      className: ShapeClassName.KeyShape,
      attrs: {
        x: 0,
        y: 0,
        width: 114,
        height: 36,
        ...keyShapeDefaultStyle,
      },
    });
    return this.keyShape;
  },

  drawWrapper(model: NodeModel, group) {
    this.wrapper = group.addShape('rect', {
      className: ShapeClassName.Wrapper,
      attrs: {
        width: 20,
        height: 20,
        x: 0,
        y: 0,
        fill: '#6580EB',
        radius: [8, 6, 6, 8],
      },
    });
    return this.wrapper;
  },

  drawLabel(model: NodeModel, group) {
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
    const {
      text,
      fontWeight,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariant,
    } = this.label.attr();
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    this.label.attr('text', Util.optimizeMultilineText(text, font, this.getMaxTextLineWidth()));
    return this.label;
  },

  /**
   * internal method
   * */
  update(nextModel: NodeModel, item) {
    const group = item.getContainer();
    let label = group.findByClassName(ShapeClassName.Label);
    // repaint label
    label.remove();
    label = this.drawLabel(nextModel, group);
    this.adjustPosition({ item, group, model: nextModel });
  },

  /**
   * internal method
   * */
  setState(name, value, item) {
    console.log(name, value, item)
    this.setStateStyle(item);
    // this.adjustPosition({ item });
  },

  adjustPosition({ model, item, group }: { model: NodeModel, item: Item, group: any }) {

    if (!group) {
      group = item.getContainer();
    }

    const keyShape = group.findByClassName(ShapeClassName.KeyShape);
    const label = group.findByClassName(ShapeClassName.Label);
    const wrapper = group.findByClassName(ShapeClassName.Wrapper);
    const appendix = group.findByClassName(ShapeClassName.Appendix);
    const keyShapeSize = this.adjustKeyShape({ label, keyShape });

    if (wrapper) {
      this.adjustWrapper({ keyShapeSize, keyShape, label, wrapper, model });
    }

    if (label) {
      this.adjustLabel({ keyShapeSize, keyShape, label, wrapper });
    }

    if (appendix) {
      this.adjustAppendix({ keyShapeSize, appendix, model });
    }

    this.resetCoordinate({ keyShapeSize, keyShape, label, wrapper });
  },

  adjustKeyShape({ label, keyShape }) {
    if (label.attr('text').includes('\n')) {
      keyShape.attr('width', 114);
      keyShape.attr('height', 54);
    }
    return {
      width: keyShape.attr('width'),
      height: keyShape.attr('height'),
    };
  },

  adjustAppendix({ keyShapeSize, appendix, model }) {

    const { width: keyShapeWidth, height: keyShapeHeight } = keyShapeSize;

    if (model.x < 0) {
      appendix.attr('x', -keyShapeWidth / 2);
      appendix.attr('y', -keyShapeHeight / 2)
    }

    else {
      appendix.attr('x', keyShapeWidth / 2 - appendix.attr('width'));
      appendix.attr('y', -keyShapeHeight / 2)
    }
  },

  resetCoordinate({ keyShapeSize, keyShape, label }) {
    const shapeArr = [label];
    keyShape.attr('x', 0 - keyShapeSize.width / 2);
    keyShape.attr('y', 0 - keyShapeSize.height / 2);
    shapeArr.map((shape) => {
      shape.attr('x', shape.attr('x') - keyShapeSize.width / 2);
      shape.attr('y', shape.attr('y') - keyShapeSize.height / 2);
      return shape;
    });
  },

  adjustLabel({ keyShapeSize, label }) {
    const { width: keyShapeWidth, height: keyShapeHeight } = keyShapeSize;
    const labelWidth = label.getBBox().width;
    label.attr('x', (keyShapeWidth - labelWidth) / 2);
    label.attr('y', keyShapeHeight / 2);
  },

  adjustWrapper({ model, keyShapeSize, wrapper }) {

    const { width: keyShapeWidth, height: keyShapeHeight } = keyShapeSize;

    // wrapper may be exposed if its height equals to keyShape's, so let it shrink a little
    wrapper.attr('height', keyShapeHeight - 1);

    wrapper.attr('width', keyShapeWidth);

    wrapper.attr('y', -wrapper.attr('height') / 2);

    if (model.x < 0) {
      wrapper.attr('x', -keyShapeWidth / 2 + 4);
    }

    else {
      wrapper.attr('x', -keyShapeWidth / 2 - 4);
    }
  },

  setStateStyle(item) {
    const statesArr = item.getStates();
    const group = item.getContainer();
    const allChildren = group.get('children');

    allChildren.forEach((shape) => {
      const className = shape.get('className');

      let statesStyle = {};
      statesArr.forEach((stateName) => {
        statesStyle = {
          ...statesStyle,
          ...this[`get${className}${stateName}Style`] && this[`get${className}${stateName}Style`](),
        };
      });

      shape.attr({
        ...this[`get${className}defaultStyle`] && this[`get${className}defaultStyle`](),
        ...statesStyle,
      });
    });
  },

  [`get${ShapeClassName.KeyShape}defaultStyle`]() {
    return {
      fill: '#fff',
      radius: 6,
    };
  },

  [`get${ShapeClassName.KeyShape}activeStyle`]() {
    return {};
  },

  [`get${ShapeClassName.KeyShape}selectedStyle`]() {
    return {
      fill: '#f5f5f5',
      stroke: '#a5a5a5',
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
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
}

G6.registerNode('biz-node', bizOption);
