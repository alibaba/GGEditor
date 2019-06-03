import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import MindPage from './Mind';
import FlowPage from './Flow';

ReactDOM.render(
  <Router>
    <Route path="/mind" component={MindPage} />
    <Route path="/flow" component={FlowPage} />
  </Router>,
  document.getElementById('root'),
);
