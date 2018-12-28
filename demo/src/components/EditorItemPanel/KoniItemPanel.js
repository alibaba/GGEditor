import React from 'react';
import { Card } from 'antd';
import { ItemPanel, Item } from '@src';
import styles from './index.less';

class FlowItemPanel extends React.Component {
  render() {
    return (
      <ItemPanel className={styles.itemPanel}>
        <Card bordered={false}>
          <Item
            type="node"
            size="40"
            shape="koni-custom-node"
            model={{
              color: '#69C0FF',
              label: 'Bank',
              labelOffsetY: 28,
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/zByaCkBKPacvgJqFgtwy.svg',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/NKmorGEesOtYawmMJkhi.svg"
          />
          <Item
            type="node"
            size="40"
            shape="koni-custom-node"
            model={{
              color: '#5CDBD3',
              label: 'Person',
              labelOffsetY: 28,
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/zByaCkBKPacvgJqFgtwy.svg',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/qXItsPCgijgVkgLiattJ.svg"
          />
          <Item
            type="node"
            size="40"
            shape="koni-custom-node"
            model={{
              color: '#B37FEB',
              label: 'Country',
              labelOffsetY: 28,
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/zByaCkBKPacvgJqFgtwy.svg',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/msMyjRAdZvDOLOeimTYF.svg"
          />
        </Card>
      </ItemPanel>
    );
  }
}

export default FlowItemPanel;
