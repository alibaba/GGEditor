import { guid } from '@/utils';
import global from '@/common/global';
import { NodeModel } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import { BaseCommand } from '@/components/Graph/command/base';
import { pasteCommand } from './paste';

interface PasteHereCommandParams {
  models: NodeModel[];
}

const pasteHereCommand: BaseCommand<PasteHereCommandParams> = {
  ...pasteCommand,

  params: {
    models: [],
  },

  init() {
    const { point, models } = global.clipboard;

    this.params = {
      models: models.map(model => {
        const { x, y } = model;

        const offsetX = point.x - x;
        const offsetY = point.y - y;

        return {
          ...model,
          id: guid(),
          x: x + offsetX,
          y: y + offsetY,
        };
      }),
    };
  },

  shortcuts: [],
};

commandManager.register('pasteHere', pasteHereCommand);
