import G6 from '@antv/g6';
import { isMind } from '../../utils';
import { GraphType } from '../constants';
import { Graph, Behavior, GraphNativeEvent } from '../interface';

class BehaviorManager {
  wrapEventHandler(type: GraphType, behavior: Behavior): Behavior {
    const events = behavior.getEvents();

    Object.keys(events).forEach(event => {
      const customBehavior: any = behavior;

      const handlerName = events[event as GraphNativeEvent];
      const handler: Function = customBehavior[handlerName];

      customBehavior[handlerName] = function(...params: any[]) {
        const { graph } = this;

        if (
          (type === GraphType.Flow && isMind(graph as Graph) === false) ||
          (type === GraphType.Mind && isMind(graph as Graph))
        ) {
          handler.apply(this, params);
        }
      };
    });

    return behavior;
  }

  registerBehavior(name: string, behavior: Behavior) {
    G6.registerBehavior(name, behavior);
  }

  registerFlowBehavior(name: string, behavior: Behavior) {
    G6.registerBehavior(name, this.wrapEventHandler(GraphType.Flow, behavior));
  }

  registerMindBehavior(name: string, behavior: Behavior) {
    G6.registerBehavior(name, this.wrapEventHandler(GraphType.Mind, behavior));
  }
}

export default new BehaviorManager();
