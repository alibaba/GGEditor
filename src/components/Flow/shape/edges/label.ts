import globalStyle from '../../common/globalStyle';
const { edgeLabelStyle, edgeLabelRectStyle, edgeLabelRectPadding } = globalStyle;

export default function drawLabel(item, group, keyShape) {
  const center = keyShape.getPoint(0.5);
  const label = item.label;
  if (!center || !label) return;
  const attrs = { ...edgeLabelStyle, ...center, text: label };
  // 绘制 Label
  const labelShape = group.addShape('text', { attrs });
  const padding = edgeLabelRectPadding;
  const textBox = labelShape.getBBox();
  // 绘制 Label 背后的框
  group.addShape('rect', {
    attrs: {
      ...edgeLabelRectStyle,
      x: textBox.minX - padding,
      y: textBox.minY - padding,
      width: textBox.maxX - textBox.minX + padding + padding,
      height: textBox.maxY - textBox.minY + padding + padding,
    },
  });
  labelShape.toFront();
  return labelShape;
}
