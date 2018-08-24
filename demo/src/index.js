import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Flow from './pages/Flow';
import Mind from './pages/Mind';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/flow" component={Flow} />
      <Route path="/mind" component={Mind} />
    </div>
  </Router>,
  document.getElementById('root'),
);
