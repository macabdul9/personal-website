import React, { Component } from "react";
import Main from "../layouts/Main";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import Cell from '../components/Papers/Cell';
import data from '../data/papers';

class Research extends Component {
  render() {
    return (
      <Main>
          <Helmet/>
          <div className="title">
            <h2><Link to="/projects">Research Publications</Link></h2>
            <p>A list of research papers I have authored/co-authored</p>
          </div>
            {data.map((paper) => (
            <Cell
              data={paper}
              key={paper.title}
            />
          ))}
      </Main>
    );
  }
}

export default Research;
