const canvas = document.createElement('canvas');
const canvasContext = canvas.getContext('2d');

const Util = {
  optimizeMultilineText(text, font, maxWidth = 320) {
    canvasContext.font = font;

    if (canvasContext.measureText(text) <= maxWidth) {
      return text;
    }

    let multilineText = '';
    let multilineTextWidth = 0;

    for (const char of text) {
      const { width } = canvasContext.measureText(char);

      if (multilineTextWidth + width >= maxWidth) {
        multilineText += '\n';
        multilineTextWidth = 0;
      }

      multilineText += char;
      multilineTextWidth += width;
    }

    return multilineText;
  },
};

export default Util;
