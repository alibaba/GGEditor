import { guid, executeBatch } from '@/utils';
import global from '@/common/global';
import { ItemType } from '@/common/constants';
import { NodeModel } from '@/common/interfaces';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

export interface PasteCommandParams {
  models: NodeModel[];
}

const pasteCommand: BaseCommand<PasteCommandParams> = {
  ...baseCommand,

  params: {
    models: [],
  },

  canExecute() {
    return !!global.clipboard.models.length;
  },

  init() {
    const { models } = global.clipboard;

    const offsetX = 10;
    const offsetY = 10;

    this.params = {
      models: models.map(model => {
        const { x, y } = model;

        return {
          ...model,
          id: guid(),
          x: x + offsetX,
          y: y + offsetY,
        };
      }),
    };
  },

  execute(graph) {
    const { models } = this.params;

    executeBatch(graph, () => {
      models.forEach(model => {
        graph.addItem(ItemType.Node, model);
      });
    });

    this.setSelectedItems(
      graph,
      models.map(model => model.id),
    );
  },

  undo(graph) {
    const { models } = this.params;

    executeBatch(graph, () => {
      models.forEach(model => {
        graph.removeItem(model.id);
      });
    });
  },

  shortcuts: [
    ['metaKey', 'v'],
    ['ctrlKey', 'v'],
  ],
};

export default pasteCommand;
