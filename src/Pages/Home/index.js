import React, { Component } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import Button from '../../Components/Button';
import { POSTS_PER_PAGE } from '../../constants';
import PostList from '../../Components/PostList';
import { StoriesContext } from '../../Context/StoriesContext';

import './home.css';

class Home extends Component {
  state = { selected: 0 };
  static contextType = StoriesContext;

  decrementSelected = () => {
    this.setState({
      selected: this.state.selected - 1,
    });
  };

  incrementSelected = () => {
    this.setState({
      selected: this.state.selected + 1,
    });
  };

  render() {
    const { data, isLoading } = this.context.data;
    const selectedStartIndex = this.state.selected * POSTS_PER_PAGE;
    const selectedPageData = data.slice(
      selectedStartIndex,
      selectedStartIndex + POSTS_PER_PAGE
    );
    const totalPages = data.length / POSTS_PER_PAGE;

    return (
      <div className="home">
        <div className="container">
          {isLoading && <p style={{ textAlign: 'center' }}>Loading</p>}
          {!isLoading && (
            <div className="controls">
              <div className="control-text">
                {this.state.selected + 1} <span>/ {totalPages}</span>
              </div>
              <div>
                <Button
                  className="control-btn"
                  onClick={this.decrementSelected}
                  disabled={this.state.selected === 0}
                >
                  <BsChevronCompactLeft />
                </Button>
                <Button
                  className="control-btn"
                  onClick={this.incrementSelected}
                  disabled={this.state.selected + 1 === totalPages}
                >
                  <BsChevronCompactRight />
                </Button>
              </div>
            </div>
          )}
          <ul>
            {selectedPageData.map((post) => (
              <PostList key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
