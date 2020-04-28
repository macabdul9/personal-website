import React from 'react';
import { Link } from 'react-router-dom';
import  icon from '../../assets/me_icon.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={icon} alt="" />
      </Link>
      <header>
        <h2>Abdul Waheed</h2>
        <p><a href="mailto:abdulwaheed1513@gmail.com" target="_blank" rel="noopener noreferrer">abdulwaheed1513@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Abdul Waheed. I like building things.
            I am CSE undergrad at Maharaja Agrasen Institute of Technology, New Delhi India.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== 'src/components/Resume' ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Abdul Waheed <Link to="/">https://github.com/macabdul9</Link></p>
    </section>
  </section>
);

export default Nav;
