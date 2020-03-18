import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'react-bootstrap';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';

export class FullPost extends Component {

    state = {
        about: null,
      }
      getSource(){
        return require(this.props.source);
      }
      componentDidMount() {
        fetch(this.getSource())
          .then(res => res.text())
          .then(about => this.setState((state) => ({ ...state, about})))
          .catch((err) => console.error(err));
      }
    render() {
        const {post} = {...this.state};
        return (
            <Main>
                <Helmet/>
                <Link to="/blog/fullpost">
                    <ReactMarkdown sourc={post}></ReactMarkdown>
                </Link>
            </Main>
        )
    }
}

export default FullPost
