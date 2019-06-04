import G6 from '@antv/g6';
import { drawAnchor, handleAnchor } from './anchor';

G6.registerNode('flowNode', {
    drawAnchor,
    handleAnchor,
    draw(model, group) {
        this.keyShape = this.drawShape(model, group);
        // 有 label 字段就绘制 label
        if (model.label) {
            this.labelShape = this.drawLabel(model, group);
        }
        // 调整图形
        this.adjustKeyShape();
        // 调整 label
        this.adjustLabelShape();
        // 绘制锚点
        return this.keyShape;
    },
    drawShape(model, group) {
        const shapeStyle = {
            width: 40,
            height: 40,
            fill: '#fff',
            stroke: '#000',
            radius: 5
        };
        return group.addShape('rect', {
            className: 'keyShape',
            attrs: {
                x: 0,
                y: 0,
                ...shapeStyle
            }
        });
    },
    drawLabel(model, group) {
        const lableStype = {
            fill: '#000',
            fontSize: 12,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontVariant: 'normal',
            textAlign: 'center',
            textBaseline: 'middle'
        };
        return group.addShape('text', {
            className: 'label',
            attrs: {
                text: model.label,
                x: 20,
                y: 40,
                ...lableStype
            }
        });
    },
    setState(name, value, item) {
        this.handleAnchor(name, value, item, 'flow');
    },
    adjustKeyShape() {
        const { keyShape } = this;
        const padding = [5, 5];
        const originWidth = keyShape.attr('width');
        const originHeight = keyShape.attr('height');
        const [textWidth, textHeight] = [
            this.getLabelSize({ keyShape }).width,
            this.getLabelSize({ keyShape }).height
        ];
        // 根据文本的宽高调整矩形的宽高
        if (originHeight < textHeight) keyShape.attr('height', textHeight + 2 * padding[0]);
        if (originWidth < textWidth) keyShape.attr('width', textWidth + 2 * padding[1]);
    },
    adjustLabelShape() {
        const labelShape = this.labelShape;
        const keyShape = this.keyShape;
        // 调整文字的位置，放到中间
        labelShape.attr('x', keyShape.attr('width') / 2);
        labelShape.attr('y', keyShape.attr('height') / 2);
    },
    getLabelSize() {
        const labelShape = this.labelShape;
        return {
            width: labelShape.getBBox().width,
            height: labelShape.getBBox().height
        };
    },
    getAnchorPoints() {
        return [[0, 0.5], [1, 0.5], [0.5, 1], [0.5, 0]];
    }
});
