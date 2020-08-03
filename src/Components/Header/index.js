import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import { ROUTES } from '../../constants';

function Header() {
  return (
    <header>
      <div className="container">
        {/* Link to /hackernews to fix gh-pages routing issues */}
        <Link to={ROUTES.homePage[1]}>
          <h1>Hackernews</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
