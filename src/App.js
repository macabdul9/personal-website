import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Blog from './views/Blog';
import Merchandise from './views/Merchandise';
import Research from './views/Research';

import markdown from './static/media/about.md';
// All of our CSS
import './static/css/main.scss';
import data from './data/github';


console.log('App.js', markdown);


function App() {
  return (
    <div style={{'backgroundColor':'CC5C6C7'}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/research" component={Research} />
          <Route path="/stats" component={Stats} />
          <Route path="/resume" component={Resume} />
          <Route path="/merchandise" component={Merchandise} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          {/* Only useful in development mode */}
          <Route component={NotFound} status={404} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
