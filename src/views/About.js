import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Main from '../layouts/Main';

import source from '../data/about.md';


class About extends Component {

  // constructor(){
  //   super()
  //   // Make all hrefs react router links
  //   // const LinkRenderer = ({ ...children }) => <Link {...children} />;
  // }
  
  state = {
    about: null,
  }
  getSource(){
    return this.props.source
  }
  componentDidMount() {
    fetch(source)
      .then(res => res.text())
      .then(about => this.setState((state) => ({ ...state, about})))
      .catch((err) => console.error(err));
  }

  render() {
    const {about} = {...this.state};

    return (
      <>
        <Main>
          <Helmet title="About" />
          <article className="post" id="about">
            <header>
              <div className="title">
                <h2><Link to="/about">About Me</Link></h2>
                <p>(in about {this.count} words)</p>
              </div>
            </header>
            <ReactMarkdown
              source={about}
              renderers={{
                Link: this.LinkRenderer,
              }}
              escapeHtml={false}
            />
          </article>
        </Main>
      </>
    )
  }
}

export default About;
