import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  return (
    <nav className="to-do-nav">
      <h2>To-Do App Navigation</h2>
      <ul>
        <li>
          <Link to="/">
            Home (To-Dos List)
          </Link>
        </li>
        <li>
          <Link to="/form">
            Form (Add a new To-Do)
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;