import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, Item, ItemPanel } from '@/index';
import { GraphMode, AnchorPointState } from '@/common/constants';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <ItemPanel className={styles.editorHd}>
          <Item
            className={styles.item}
            model={{
              type: 'circle',
              size: 100,
              label: 'circle',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1IRuSnRr0gK0jSZFnXXbRRXXa-110-112.png"
              width="55"
              height="56"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'rect',
              size: [100, 50],
              label: 'rect',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1reKOnUT1gK0jSZFrXXcNCXXa-178-76.png"
              width="89"
              height="38"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'ellipse',
              size: [100, 50],
              label: 'ellipse',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1AvmVnUH1gK0jSZSyXXXtlpXa-216-126.png"
              width="108"
              height="63"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'diamond',
              size: 100,
              label: 'diamond',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1EB9VnNz1gK0jSZSgXXavwpXa-178-184.png"
              width="89"
              height="92"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'triangle',
              size: 100,
              label: 'triangle',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB12sC2nKH2gK0jSZJnXXaT1FXa-126-156.png"
              width="63"
              height="78"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'star',
              size: 100,
              label: 'star',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1m4O1nO_1gK0jSZFqXXcpaXXa-194-198.png"
              width="97"
              height="99"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'image',
              size: 100,
              label: 'image',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1eP94nKH2gK0jSZJnXXaT1FXa-112-134.png"
              width="56"
              height="67"
              draggable={false}
            />
          </Item>
          <Item
            className={styles.item}
            model={{
              type: 'bizNode',
              size: [112, 66],
              label: 'bizNode',
              center: 'topLeft',
            }}
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1_cbfnHj1gK0jSZFuXXcrHpXa-244-132.png"
              width="112"
              height="66"
              draggable={false}
            />
          </Item>
        </ItemPanel>
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultNode: {
              type: 'bizFlowNode',
            },
            defaultEdge: {
              type: 'bizFlowEdge',
            },
          }}
          customModes={(mode, behaviors) => {
            if (mode === GraphMode.Default) {
              behaviors['drag-add-edge'] = {
                type: 'drag-add-edge',
                getAnchorPointStateOfSourceNode: (sourceNode, sourceAnchorPoint) => {
                  return AnchorPointState.Enabled;
                },
                getAnchorPointStateOfTargetNode: (sourceNode, sourceAnchorPoint, targetNode, targetAnchorPoint) => {
                  return AnchorPointState.Enabled;
                },
              };
            }

            return behaviors;
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
