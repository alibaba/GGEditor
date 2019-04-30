import G6 from '@antv/g6';
import Util from '../../util';
import upperFirst from 'lodash/upperFirst';

G6.registerNode('mind-node', {
  draw(cfg, group) {
    this.drawKeyShape(cfg, group);
    if (cfg.label) {
      this.drawLabel(cfg, group);
    }
    this.adjustKeyShape();
    this.adjustTextShape();
    return this.keyShape;
  },
  drawKeyShape(cfg, group) {
    const keyShapeType = this.getKeyShapeType();
    const keyShapeCfg = this.getKeyShapeStyle();
    this.keyShape = group.addShape(keyShapeType, {
      className: 'keyShape',
      attrs: {
        x: 0,
        y: 0,
        ...Object.assign({}, keyShapeCfg.default, keyShapeCfg[`depth${cfg.depth}`]),
      },
    });
    return this.keyShape;
  },

  drawLabel(cfg, group) {
    // 文本样式
    const textCfg = this.getLabelStyle();
    // 绘制文本
    this.labelShape = group.addShape('text', {
      className: 'label',
      attrs: {
        text: cfg.label,
        x: 0,
        y: 0,
        ...Object.assign({}, textCfg.default, textCfg[`depth${cfg.depth}`]),
      },
    });
    // 更改文本内容
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
    const _self = this;
    // 获取当前元素所有状态
    let statesArr = item.getStates();
    const strategies = {
      dynamicBase: (group, type) => {
        const newStyleObj = _self.getCustomStatesStyle()[type];
        for (let className in newStyleObj) {
          const currentChild = group.findByClassName(className);
          currentChild.attr({
            ...newStyleObj[className],
          });
        }
        _self.adjustKeyShape(group.findByClassName('keyShape'), group.findByClassName('label'));
        _self.adjustTextShape(group.findByClassName('keyShape'), group.findByClassName('label'));
      },
      // 激活时样式
      active: (group) => {
        strategies.dynamicBase(group, 'active');
      },
      // 默认样式
      static: (group) => {
        // 获取group中所有子图项
        const groupChildren = group.get('children');

        groupChildren.map((child) => {
          const customStyle = _self[`get${upperFirst(child.get('className'))}Style`]().default;
          child.attr({
            ...Object.assign({}, child.getDefaultAttrs(), customStyle),
          });
        });
        _self.adjustKeyShape(group.findByClassName('keyShape'), group.findByClassName('label'));
        _self.adjustTextShape(group.findByClassName('keyShape'), group.findByClassName('label'));
      },
      // 选中样式
      selected: (group) => {
        strategies.dynamicBase(group, 'select');
      },
    };

    const group = item.getContainer();

    if (statesArr.includes('selected')) {
      strategies.selected(group);
    } else if (statesArr.includes('active') && !statesArr.includes('selected')) {
      strategies.active(group);
    } else if (statesArr.length === 0) {
      strategies.static(group);
    }
  },

  // 提供给开发者
  getCustomStatesStyle() {
    return {
      active: {
        keyShape: {
          fill: '#facbda',
          stroke: 'blue',
          lineWidth: 3,
        },
        label: {
          fontSize: 16,
          weight: 'bold',
        },
      },
      select: {
        keyShape: {
          stroke: 'red',
        },
      },
    };
  },
  adjustKeyShape(kshape, lshape) {
    const keyShape = kshape || this.keyShape;
    const padding = this.getPadding();
    const originWidth = keyShape.attr('width');
    const originHeight = keyShape.attr('height');
    const [
      textWidth,
      textHeight,
    ] = [this.getLabelSize(lshape).width, this.getLabelSize(lshape).height];
    if (originHeight < textHeight) {
      keyShape.attr('height', textHeight + 2 * padding[0]);
    }
    if (originWidth < textWidth) {
      keyShape.attr('width', textWidth + 2 * padding[1]);
    }
  },
  adjustTextShape(kshape, lshape) {
    const labelShape = lshape || this.labelShape;
    const keyShape = kshape || this.keyShape;
    if (this.getKeyShapeType() === 'rect') {
      labelShape.attr('x', keyShape.attr('width') / 2);
      labelShape.attr('y', keyShape.attr('height') / 2);
    }
  },
  getKeyShapeStyle() {
    return {
      default: {
        width: 80,
        height: 40,
        fill: '#fff',
        stroke: '#000',
        radius: 5,
      },
      depth0: {
        fill: '#419ee0',
        stroke: '#4156e0',
        radius: 20,
      },
      depth1: {
        fill: '#eaeaea',
        stroke: '#ccc',
      },
    };
  },
  getLabelStyle() {
    return {
      default: {
        fill: '#000',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontVariant: 'normal',
        textAlign: 'center',
        textBaseline: 'middle',
      },
      depth0: {
        fontSize: 20,
        fill: '#fff',
      },
      depth1: {
        fill: '#00bcd4',
      },
    };
  },
  getKeyShapeType() {
    // G中定义的shape，但不支持text
    return 'rect';
  },
  getMaxTextLineWidth() {
    return 80;
  },
  getLabelSize(shape) {
    const labelShape = shape || this.labelShape;
    return {
      width: labelShape.getBBox().width,
      height: labelShape.getBBox().height,
    };
  },
  getPadding() {
    return [5, 5];
  },
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
