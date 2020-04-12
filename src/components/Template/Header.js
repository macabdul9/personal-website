import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';
import img from '../../assets/icon.png';


const Header = () => (
  <header id="header" style={{'backgroundColor':'#D7D7D7', 'fontSize':"16px"}} >
    {/* <li>
      <Link to="/">
        <img src={img} height="45" width="50" alt="Logo" style={{"marginLeft":"50px", "position":"fixed"}}/>
      </Link>
    </li> */}
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links"  style={{}}>
      <ul >
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <h2><Link to={l.path}>{l.label}</Link></h2>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
