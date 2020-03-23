import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

const DELTA = 0.05;

const zoomOutCommand: BaseCommand = {
  ...baseCommand,

  canUndo() {
    return false;
  },

  execute(graph) {
    const ratio = 1 - DELTA;

    const zoom = graph.getZoom() * ratio;
    const minZoom = graph.get('minZoom');

    if (zoom < minZoom) {
      return;
    }

    graph.zoom(ratio);
  },

  shortcuts: [
    ['metaKey', '-'],
    ['ctrlKey', '-'],
  ],
};

export default zoomOutCommand;
