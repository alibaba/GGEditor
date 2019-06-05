import G6 from '@antv/g6';
import {
  NODE_MAX_TEXT_LINE_WIDTH,
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_KEYSHAPE,
  SHAPE_CLASSNAME_PREFIX,
} from '@common/constants';
import Util from './util';

G6.registerNode('biz-node', {
  keyShape: null,
  label: null,
  prefix: null,
  draw(model, group) {
    const keyShape = this.drawKeyShape(model, group);
    this.drawPrefix(model, group);
    this.drawLabel(model, group);
    return keyShape;
  },
  drawKeyShape(model, group) {
    const keyShapeType = 'rect';
    const keyShapeDefaultStyle = this[`get${SHAPE_CLASSNAME_KEYSHAPE}defaultStyle`]();
    this.keyShape = group.addShape(keyShapeType, {
      className: SHAPE_CLASSNAME_KEYSHAPE,
      attrs: {
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        ...keyShapeDefaultStyle,
      },
    });
    return this.keyShape;
  },
  drawPrefix(model, group) {
    this.prefix = group.addShape('image', {
      className: SHAPE_CLASSNAME_PREFIX,
      attrs: {
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTItMmgyNHYyNEgtMnoiLz48Y2lyY2xlIGN4PSI5Ljg4MiIgY3k9IjkuODgyIiByPSI5Ljg4MiIgZmlsbD0iI0ZGQkYyQyIvPjxwYXRoIGZpbGw9IiM0QzQwMjMiIGQ9Ik05Ljg4MiAxNS41M2E1LjY0OCA1LjY0OCAwIDAgMCA1LjU5Ni00Ljg4NGMuMDM0LS4yNSAwLS43NjQtLjY0OS0uNzY0SDQuOTMzYy0uNjUgMC0uNjgxLjUtLjY1Ljc0M2E1LjY0OCA1LjY0OCAwIDAgMCA1LjYgNC45MDR6Ii8+PHBhdGggZmlsbD0iI0U3NDY0MyIgZD0iTTEzLjI3MSAxNC40YTUuNjIyIDUuNjIyIDAgMCAxLTMuMzg5IDEuMTMgNS42MjIgNS42MjIgMCAwIDEtMy4zODgtMS4xMyA0LjIyOSA0LjIyOSAwIDAgMSAzLjM4OC0xLjY5NGMxLjM4NiAwIDIuNjE2LjY2NSAzLjM4OSAxLjY5NHoiLz48Y2lyY2xlIGN4PSI1LjY0NyIgY3k9IjcuMDU5IiByPSIxLjQxMiIgZmlsbD0iIzRDNDAyMyIvPjxjaXJjbGUgY3g9IjE0LjExOCIgY3k9IjcuMDU5IiByPSIxLjQxMiIgZmlsbD0iIzRDNDAyMyIvPjwvZz48L3N2Zz4=',
        width: 20,
        height: 20,
        x: 0,
        y: 0,
      },
    });
    return this.prefix;
  },
  drawLabel(model, group) {
    const labelDefaultStyle = this[`get${SHAPE_CLASSNAME_LABEL}defaultStyle`]();
    // draw label
    this.label = group.addShape('text', {
      className: SHAPE_CLASSNAME_LABEL,
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
  update(nextModel, item) {
    const group = item.getContainer();
    let label = group.findByClassName(SHAPE_CLASSNAME_LABEL);
    // repaint label
    label.remove();
    label = this.drawLabel(nextModel, group);
    this.adjustPosition({ nextModel, item });
  },
  setState(name, value, item) {
    this.setStateStyle(item);
    // this.adjustPosition({ item });
  },
  adjustPosition({ item }) {
    const group = item.getContainer();
    const keyShape = group.findByClassName(SHAPE_CLASSNAME_KEYSHAPE);
    const label = group.findByClassName(SHAPE_CLASSNAME_LABEL);
    const prefix = group.findByClassName(SHAPE_CLASSNAME_PREFIX);
    const nextKeyShapeSize = this.adjustKeyShapeSize({ keyShape, label, prefix });
    if (prefix) {
      this.adjustPrefix({ nextKeyShapeSize, keyShape, label, prefix });
    }
    if (label) {
      this.adjustLabel({ nextKeyShapeSize, keyShape, label, prefix });
    }
  },
  adjustKeyShapeSize({ keyShape, label, prefix }) {
    const [textWidth, textHeight] = [label.getBBox().width, label.getBBox().height];
    const [prefixWidth, prefixHeight] = [prefix.getBBox().width, prefix.getBBox().height];
    keyShape.attr('height', Math.max(textHeight, prefixHeight) + this.getPadding() * 2);
    keyShape.attr('width', textWidth + prefixWidth + this.getPadding() * 2);
    return {
      width: keyShape.attr('width'),
      height: keyShape.attr('height'),
    };
  },
  adjustLabel({ label, prefix }) {
    const offsetFromPrefix = 3;
    const prefixWidth = prefix.attr('width');
    const prefixHeight = prefix.attr('height');
    const prefixY = prefix.attr('y');
    const prefixRight = prefix.attr('x') + prefixWidth;
    label.attr('x', prefixRight + offsetFromPrefix);
    label.attr('y', prefixY + prefixHeight / 2);
  },
  adjustPrefix({ nextKeyShapeSize, prefix }) {
    const { height } = nextKeyShapeSize;
    const prefixHeight = prefix.getBBox().height;
    prefix.attr('x', this.getPadding());
    prefix.attr('y', (height - prefixHeight) / 2);
    return {
      width: prefix.attr('width'),
      height: prefix.attr('height'),
    };
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
  [`get${SHAPE_CLASSNAME_KEYSHAPE}defaultStyle`]() {
    return {
      stroke: 'transparent',
      fill: '#fff',
      radius: 5,
    };
  },
  [`get${SHAPE_CLASSNAME_KEYSHAPE}activeStyle`]() {
    return {
      stroke: '#a5a5a5',
    };
  },
  [`get${SHAPE_CLASSNAME_KEYSHAPE}selectedStyle`]() {
    return {
      fill: '#f5f5f5',
      stroke: '#a5a5a5',
    };
  },
  [`get${SHAPE_CLASSNAME_LABEL}defaultStyle`]() {
    return {
      fill: '#000',
    };
  },
  getMaxTextLineWidth() {
    return NODE_MAX_TEXT_LINE_WIDTH;
  },
  getPadding() {
    return 5;
  },
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
