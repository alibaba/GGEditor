import G6 from '@antv/g6';
import { isMind } from '@/utils';
import { GraphType } from '@/common/constants';
import { Behavior, GraphNativeEvent } from '@/common/interfaces';

class BehaviorManager {
  behaviors: {
    [propName: string]: Behavior;
  };

  constructor() {
    this.behaviors = {};
  }

  wrapEventHandler(type: GraphType, behavior: Behavior): Behavior {
    const events = behavior.getEvents();

    Object.keys(events).forEach(event => {
      const customBehavior: any = behavior;

      const handlerName = events[event as GraphNativeEvent];
      const handler: Function = customBehavior[handlerName];

      customBehavior[handlerName] = function(...params: any[]) {
        const { graph } = this;

        if (
          (type === GraphType.Flow && isMind(graph as G6.Graph) === false) ||
          (type === GraphType.Mind && isMind(graph as G6.Graph))
        ) {
          handler.apply(this, params);
        }
      };
    });

    return behavior;
  }

  register(name: string, behavior: Behavior) {
    const { graphType } = behavior;

    this.behaviors[name] = behavior;

    switch (graphType) {
      case GraphType.Flow:
        G6.registerBehavior(name, this.wrapEventHandler(GraphType.Flow, behavior));
        break;

      case GraphType.Mind:
        G6.registerBehavior(name, this.wrapEventHandler(GraphType.Mind, behavior));
        break;

      default:
        G6.registerBehavior(name, behavior);
        break;
    }
  }
}

export default new BehaviorManager();
