import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import FlowPage from './pages/Flow';
import MindPage from './pages/Mind';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/flow" component={FlowPage} />
      <Route path="/mind" component={MindPage} />
    </div>
  </Router>,
  document.getElementById('root'),
);
