import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Hackernews</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
