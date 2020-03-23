import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

const DELTA = 0.05;

const zoomInCommand: BaseCommand = {
  ...baseCommand,

  canUndo() {
    return false;
  },

  execute(graph) {
    const ratio = 1 + DELTA;

    const zoom = graph.getZoom() * ratio;
    const maxZoom = graph.get('maxZoom');

    if (zoom > maxZoom) {
      return;
    }

    graph.zoom(ratio);
  },

  shortcuts: [
    ['metaKey', '='],
    ['ctrlKey', '='],
  ],
};

export default zoomInCommand;
