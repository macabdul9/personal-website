import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import About from './views/About';
import EDA from "./views/EDA";
import Readme from './views/Readme';
import Report from './views/Report';
import Feedback from './views/Feedback'

import Contact from './views/Contact';
import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/eda" component={EDA} />
          <Route path="/readme" component={Readme} />
          <Route path="/report" component={Report} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} status={404} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
