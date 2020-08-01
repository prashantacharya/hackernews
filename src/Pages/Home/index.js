import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StoriesContext } from '../../Context/StoriesContext';

class Home extends Component {
  static contextType = StoriesContext;
  render() {
    console.log(this.context);
    return (
      <div className="home">
        <div className="container">
          <p>Home Page</p>
          <Link to="story/123">Go to story pages</Link>
        </div>
      </div>
    );
  }
}

export default Home;
