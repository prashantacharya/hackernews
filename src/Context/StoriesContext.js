import React, { createContext, Component } from 'react';

export const StoriesContext = createContext();

class StoriesContextWrapper extends Component {
  state = {
    id: [],
  };

  async componentDidMount() {
    const data = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    const jsonData = await data.json();
    this.setState({
      id: jsonData,
    });
  }

  render() {
    return (
      <StoriesContext.Provider
        value={{ data: this.state, changeFruit: this.changeFruit }}
      >
        {this.props.children}
      </StoriesContext.Provider>
    );
  }
}

export default StoriesContextWrapper;
