const canvas = document.createElement('canvas');
const canvasContext = canvas.getContext('2d');

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
