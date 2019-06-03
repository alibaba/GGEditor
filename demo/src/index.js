import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import MindPage from './Mind';
import FlowPage from './Flow';

ReactDOM.render(
  <Router>
    <Route path="/flow" component={FlowPage} />
    <Route path="/mind" component={MindPage} />
  </Router>,
  document.getElementById('root'),
);
