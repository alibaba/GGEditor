import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

class HomePage extends React.Component {
  render() {
    return (
      <Row type="flex" style={{ flex: 1, alignItems: 'center' }}>
        <Col span={4} />
        <Col span={16}>
          <Card title="DEMO">
            <p><Link to="/flow">流程图</Link></p>
            <p><Link to="/koni">拓扑图</Link></p>
            <p><Link to="/mind">思维导图</Link></p>
          </Card>
        </Col>
        <Col span={4} />
      </Row>
    );
  }
}

export default HomePage;
