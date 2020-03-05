import { Node } from '@/common/interfaces';

const canvas = document.createElement('canvas');
const canvasContext = canvas.getContext('2d');

export function getNodeSide(item: Node): 'left' | 'right' {
  const model = item.getModel();

  if (model.side) {
    return model.side as 'left' | 'right';
  }

  const parent = item.get('parent');

  if (parent) {
    return getNodeSide(parent);
  }

  return 'right';
}

export function getRectPath(x: number, y: number, w: number, h: number, r: number) {
  if (r) {
    return [
      ['M', +x + +r, y],
      ['l', w - r * 2, 0],
      ['a', r, r, 0, 0, 1, r, r],
      ['l', 0, h - r * 2],
      ['a', r, r, 0, 0, 1, -r, r],
      ['l', r * 2 - w, 0],
      ['a', r, r, 0, 0, 1, -r, -r],
      ['l', 0, r * 2 - h],
      ['a', r, r, 0, 0, 1, r, -r],
      ['z'],
    ];
  }

  const res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];

  res.toString = toString;

  return res;
}

export function getFoldButtonPath() {
  const w = 14;
  const h = 14;
  const rect = getRectPath(0, 0, w, h, 2);
  const hp = `M${(w * 3) / 14},${h / 2}L${(w * 11) / 14},${h / 2}`;
  const vp = '';

  return rect + hp + vp;
}

export function getUnfoldButtonPath() {
  const w = 14;
  const h = 14;
  const rect = getRectPath(0, 0, w, h, 2);
  const hp = `M${(w * 3) / 14},${h / 2}L${(w * 11) / 14},${h / 2}`;
  const vp = `M${w / 2},${(h * 3) / 14}L${w / 2},${(h * 11) / 14}`;

  return rect + hp + vp;
}

export function optimizeMultilineText(text: string, font: string, maxRows: number, maxWidth: number) {
  canvasContext.font = font;

  if (canvasContext.measureText(text).width <= maxWidth) {
    return text;
  }

  let multilineText = [];

  let tempText = '';
  let tempTextWidth = 0;

  for (const char of text) {
    const { width } = canvasContext.measureText(char);

    if (tempTextWidth + width >= maxWidth) {
      multilineText.push(tempText);

      tempText = '';
      tempTextWidth = 0;
    }

    tempText += char;
    tempTextWidth += width;
  }

  if (tempText) {
    multilineText.push(tempText);
  }

  if (multilineText.length > maxRows) {
    const ellipsis = '...';
    const ellipsisWidth = canvasContext.measureText(ellipsis).width;

    let tempText = '';
    let tempTextWidth = 0;

    for (const char of multilineText[maxRows - 1]) {
      const { width } = canvasContext.measureText(char);

      if (tempTextWidth + width > maxWidth - ellipsisWidth) {
        break;
      }

      tempText += char;
      tempTextWidth += width;
    }

    multilineText = multilineText.slice(0, maxRows - 1).concat(`${tempText}${ellipsis}`);
  }

  return multilineText.join('\n');
}
