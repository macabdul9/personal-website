import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route,
  } from 'react-router-dom';
import posts from '../data/posts/posts';
import FullPost  from '../components/Blog/FullPost';


class FullPostsRouters extends Component {
    
    render() {
        let count = 0;
        const fullViewPosts = posts.map(post => {
            // console.log('FullPostRouters.js', post['id'], post['Source']);
            return (
                <Route key={post.id} path={post['id']} component={() => <FullPost source={post['Source']}/>}> </Route>
            )
        });
        return (
            <Switch>
                {fullViewPosts}
            </Switch>
        )
    }
}

export default FullPostsRouters;
