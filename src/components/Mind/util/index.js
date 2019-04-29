const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const Util = {
  getLabelTextByTextLineWidth(labelText, maxTextLineWidth = 320) {
    let lineWidth = ctx.measureText(labelText).width;
    if (lineWidth > maxTextLineWidth) {
      lineWidth = 0;
      for (let i = 1; i < labelText.length; i++) {
        lineWidth += ctx.measureText(labelText[i]).width;
        if (lineWidth >= maxTextLineWidth) {
          labelText = `${labelText.substring(0, i)}\n${labelText.substring(i, labelText.length)}`;
          i += 1;
          lineWidth = 0;
        }
      }
    }
    return labelText;
  },
};

export default Util;
