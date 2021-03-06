import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
// import Merchandise from './views/Merchandise';
import Research from './views/Research';
// All of our CSS
import './static/css/main.scss';
// import FullPostsRouters from './views/FullPostRouters';
import FullPost from './components/Blog/FullPost';
// import posts from './data/posts/posts'

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
          {/* <Route path="/merchandise" component={Merchandise} /> */}
          <Route path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path='/1' component={() => <FullPost source='introduction-to-machine-learning.md'/>}/>
          <Route path='/2' component={() => <FullPost source='knn.md'/>}/>
          <Route path='/3' component={() => <FullPost source='knn.md'/>}/>
          <Route component={NotFound} status={404} />
        </Switch>
        {/* <Switch>
          {posts.map(post => {
              return <Route  path={{pathname:post['id']}} component={(props) => <FullPost {...props} source={post['Source']}/>}/>
            })}
          <Route path='/1' component={() => <FullPost source='introduction-to-machine-learning.md'/>}/>
          <Route path='/2' component={() => <FullPost source='knn.md'/>}/>
          <Route path='/3' component={() => <FullPost source='knn.md'/>}/>
        </Switch> */}
    </Router>
    </div>
  );
}

export default App;
