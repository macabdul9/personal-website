import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import posts from '../data/posts/posts.json';
import Cell from '../components/Blog/Cell';
import FullPost from '../components/Blog/FullPost';


class Blog extends Component {
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const blog = posts.map(post =>{
        return <Cell title={post.Title} author={post.Author} postedOn={monthNames[(new Date()).getMonth()] +', ' +(new Date()).getFullYear()} description={post.Description}></Cell>
    });

    return (
      <div>
        <Main>
          <Helmet title="About" />
          {blog}
        </Main>
      </div>
    )
  }
}

export default Blog;
