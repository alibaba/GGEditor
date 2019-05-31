import G6 from '@antv/g6';
import {
  NODE_MAX_TEXT_LINE_WIDTH,
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON,
} from '@common/constants';
import Util from '../../util';


G6.registerNode('mind-node', {
  draw(model, group) {
    this.drawKeyShape(model, group);
    this.drawLabel(model, group);
    this.adjustKeyShape();
    this.adjustLabelShape();
    return this.keyShape;
  },
  drawKeyShape(model, group) {
    const keyShapeType = this.getKeyShapeType();
    const keyShapeCfg = this.getKeyShapeStyle({ model });
    this.keyShape = group.addShape(keyShapeType, {
      className: 'keyShape',
      attrs: {
        x: 0,
        y: 0,
        ...keyShapeCfg,
      },
    });
    return this.keyShape;
  },
  afterDraw(model, group) {
    // model.isRoot has not implement yet
    if (model.children && model.children.length > 0 && !model.isRoot) {
      this.drawExpandOrCollapseButton({ model, group });
    }
    const customShapes = this.getCustomShapes();
    customShapes.map(shapeCfg => {
      group.addShape(shapeCfg.type, {
        className: shapeCfg.className,
        attrs: {
          ...this[`get${upperFirst(shapeCfg.className)}Style`](),
        },
      });
    });
  },
  drawLabel(model, group) {
    // get label styles
    const labelCfg = this.getLabelStyle({ model });
    // draw label
    this.labelShape = group.addShape('text', {
      className: SHAPE_CLASSNAME_LABEL,
      attrs: {
        text: model.label,
        x: 0,
        y: 0,
        ...labelCfg,
      },
    });
    // change text content according to text line width
    const text = this.labelShape.attr('text');
    const fontWeight = this.labelShape.attr('fontWeight');
    const fontFamily = this.labelShape.attr('fontFamily');
    const fontSize = this.labelShape.attr('fontSize');
    const fontStyle = this.labelShape.attr('fontStyle');
    const fontVariant = this.labelShape.attr('fontVariant');
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    this.labelShape.attr('text', Util.optimizeMultilineText(text, font, this.getMaxTextLineWidth()));
  },

  setState(name, value, item) {
    // get current item's all states <Array>
    const statesArr = item.getStates();

    const group = item.getContainer();
    const itemStates = Util.itemStates.call(this, { item, group });

    if (item.hasState('selected')) {
      itemStates.selected();
    }
    if (item.hasState('active') && !item.hasState('selected')) {
      itemStates.active();
    }
    if (statesArr.length === 0) {
      itemStates.staticState();
    }
  },
  drawExpandOrCollapseButton({ model, group }) {
    const className = SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON;
    const keyShape = group.findByClassName('keyShape');
    const expandAttr = this.getExpandButtonConfig();
    const collapseAttr = this.getCollapseButtonConfig();
    if (model.collapsed) {
      const { path, width, height, offset } = expandAttr;
      const button = group.addShape('path', {
        className,
        attrs: {
          path,
          ...this.getEcButtonStyle(),
        },
      });
      button.translate(model.x < 0 ? -width - offset : keyShape.attr('width') + offset, (keyShape.attr('height') - height) / 2);
    } else {
      const { path, width, height, offset } = collapseAttr;
      const button = group.addShape('path', {
        className,
        attrs: {
          path,
          ...this.getEcButtonStyle(),
        },
      });
      button.translate(model.x < 0 ? -width - offset : keyShape.attr('width') + offset, (keyShape.attr('height') - height) / 2);
    }
  },
  adjustKeyShape({ updatedKeyShape, updatedLabelShape } = {}) {
    const keyShape = updatedKeyShape || this.keyShape;
    const padding = this.getPadding();
    const originWidth = keyShape.attr('width');
    const originHeight = keyShape.attr('height');
    const [
      textWidth,
      textHeight,
    ] = [this.getLabelSize({ updatedLabelShape }).width,
      this.getLabelSize({ updatedLabelShape }).height];
    if (originHeight < textHeight) {
      keyShape.attr('height', textHeight + 2 * padding[0]);
    }
    if (originWidth < textWidth) {
      keyShape.attr('width', textWidth + 2 * padding[1]);
    }
  },
  adjustLabelShape({ updatedKeyShape, updatedLabelShape } = {}) {
    const labelShape = updatedLabelShape || this.labelShape;
    const keyShape = updatedKeyShape || this.keyShape;
    if (this.getKeyShapeType() === 'rect') {
      labelShape.attr('x', keyShape.attr('width') / 2);
      labelShape.attr('y', keyShape.attr('height') / 2);
    }
  },
  getLabelSize({ updatedLabelShape }) {
    const labelShape = updatedLabelShape || this.labelShape;
    return {
      width: labelShape.getBBox().width,
      height: labelShape.getBBox().height,
    };
  },

  // functions that can be overridden by advice
  getCustomShapes() {
    return [
      {
        type: 'rect',
        className: 'myRect',
      },
    ];
  },
  getMyRectStyle() {
    return {
      x: 0,
      y: 0,
      width: 10,
      height: 10,
      fill: '#ccc',
    };
  },
  getExpandButtonConfig() {
    const width = 17;
    const height = 17;
    const offset = 3;
    return {
      path: Util.getExpandButtonPath({ width, height }),
      width,
      height,
      offset,
    };
  },
  getCollapseButtonConfig() {
    const width = 17;
    const height = 17;
    const offset = 3;
    return {
      path: Util.getCollapseButtonPath({ width, height }),
      width,
      height,
      offset,
    };
  },
  getCustomStatesStyle() {
    return {
      active: {
        keyShape: {
          fill: '#acbdfa',
          stroke: 'blue',
          lineWidth: 3,
        },
        label: {
          fill: 'red',
        },
        [SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON]: {
          fill: '#acbdfa',
        },
        myRect: {
          fill: '#fff',
        }
      },
      selected: {
        keyShape: {
          stroke: 'red',
          lineWidth: 3,
        },
      },
    };
  },
  getKeyShapeStyle({ model }) {
    const base = {
      width: 80,
      height: 40,
      fill: '#fff',
      stroke: '#000',
      radius: 5,
    };
    if (model.depth === 0) {
      const scopedStyle = {
        fill: '#419ee0',
        stroke: '#4156e0',
        radius: 20,
      };
      return { ...base, ...scopedStyle };
    }
    if (model.depth === 1) {
      const scopedStyle = {
        fill: '#eaeaea',
        stroke: '#ccc',
      };
      return { ...base, ...scopedStyle };
    }

    return base;
  },
  getLabelStyle({ model }) {
    const base = {
      fill: '#000',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontVariant: 'normal',
      textAlign: 'center',
      textBaseline: 'middle',
    };
    if (model.depth === 0) {
      const scopedStyle = {
        fontSize: 20,
        fill: '#fff',
      };
      return { ...base, ...scopedStyle };
    }
    if (model.depth === 1) {
      const scopedStyle = {
        fontSize: 20,
        fill: '#123',
      };
      return { ...base, ...scopedStyle };
    }

    return base;
  },
  getEcButtonStyle() {
    return {
      stroke: '#000',
      fill: '#fff',
    };
  },
  getKeyShapeType() {
    // shape defined in 'G', not support 'text'
    return 'rect';
  },
  getMaxTextLineWidth() {
    return NODE_MAX_TEXT_LINE_WIDTH;
  },
  getPadding() {
    return [5, 20];
  },
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
