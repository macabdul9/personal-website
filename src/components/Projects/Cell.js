import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';
import classes from './Cell.module.css';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h2><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h2>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <p className={classes.Cell}>{data.desc}</p>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
