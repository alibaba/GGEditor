import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import FlowPage from './pages/Flow';
import MindPage from './pages/Mind';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/flow" component={FlowPage} />
      <Route path="/mind" component={MindPage} />
    </div>
  </Router>,
  document.getElementById('root'),
);
