const Util = {
  /**
   * get rect by box
   * @param  {object} box box
   * @param  {object} group group
   * @param  {object} style style
   * @return {object} rect
   */
  getRectByBox(box, group, style) {
    return group.addShape('rect', {
      attrs: {
        ...style,
        x: box.minX,
        y: box.minY,
        width: box.maxX - box.minX,
        height: box.maxY - box.minY,
      },
    });
  },
};

export default Util;
