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

    console.log(itemModel);
    console.log(this.graph);
    if (itemModel && itemModel.error) {
    }
  },
};
