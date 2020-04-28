import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
// import url from 'url';
import classes from './Cell.module.css';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <strong>Title:</strong>{data.title}
            </a>
        </h3>
        <p>
            <strong>Authors:</strong>{data.authors}
        </p>
        <p>
            <strong>Status:</strong>{data.status}
        </p>
        <p>
          <strong>Journal :</strong> {data.journal}
        </p>
        <h5>DOI : <strong>{data.doi}</strong></h5>
      </header>
      <p className={classes.Cell} align="justify"><strong>Abstract:</strong>{data.abstract}</p>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
