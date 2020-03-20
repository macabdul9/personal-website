import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';
import Main from '../../layouts/Main';
import marked from 'marked';
export class FullPost extends Component {

    state = {
        post: null,
    }
    
    componentDidMount() {
    console.log(`${this.props.source}`);
    const mdFile = require(`${this.props.source}`);
        fetch(mdFile)
        .then(response => {
            return response.text()
        })
        .then(text => {
        this.setState({
            post: marked(text)
        })
        })
    }
    render() {
        const {post} = {...this.state};
        // console.log('FullPost.j posts', this.state['post'], this.props.source);
        return (
            <Main>
                <Helmet/>
                {/* <h1>have to render {this.props.source}</h1> */}
                <section>
                    <article dangerouslySetInnerHTML={{__html: post}}></article>
                </section>
            </Main>
        )
    }
}

export default FullPost;
