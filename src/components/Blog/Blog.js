import React, { Component } from 'react';
import classes from './Blog.module.css';

class Blog extends Component {
  render() {
    return (
        <div className="cell-container">
            <article className="mini-post">
            <header>
                <h2><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></h2>
                <h4><strong>Author</strong>{this.props.author} </h4>
                <h5><strong>Posted on:</strong>{this.props.postedOn}</h5>
            </header>
            <p className={classes.Blog}>{this.props.description}</p>
            </article>
        </div>
    )
  }
}

export default Blog;
