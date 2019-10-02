/**
 * 业务中前端层面的错误监听
 * */
export const bizErrorListenerConfig = {
  getEvents() {
    return {
      afterupdateitem: 'handleAfterUpdateItem',
    };
  },

  handleAfterUpdateItem({ item, cfg }) {
    const itemModel = item.getModel();
    const keyShape = item.getKeyShape();
    const { graph } = this;

    console.log(itemModel);
    console.log(item);
    if (itemModel && itemModel.error) {
      keyShape.attr('fill', 'red');
      console.log(keyShape);
    }
  },
};
