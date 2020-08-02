import React, { createContext, Component } from 'react';
import Axios from 'axios';

import { BASE_URL, POSTS_PER_PAGE } from '../constants';

export const StoriesContext = createContext();

class StoriesContextWrapper extends Component {
  state = {
    id: [],
    data: [],
    selectedPage: 0,
    errorMsg: '',
    isLoading: false,
  };

  fetchDataFromId = async () => {
    const promises = [];

    const startIndex = this.state.selectedPage * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    for (let i = startIndex; i < endIndex; i++) {
      promises.push(Axios.get(`${BASE_URL}/item/${this.state.id[i]}.json`));
    }
    try {
      const response = await Promise.all(promises);
      const data = response.map((res) => res.data);
      this.setState({ data: [...this.state.data, ...data] }, () => {
        if ((this.state.selectedPage + 1) * POSTS_PER_PAGE < 499) {
          this.setState({ selectedPage: this.state.selectedPage + 1 });
        }
        this.setState({ isLoading: false });
      });
    } catch (error) {
      if (error.request) {
        this.setState({ errorMsg: 'Could not connect to the internet' });
      } else if (error.response) {
        this.setState({ errorMsg: error.message });
      } else {
        this.setState({ errorMsg: 'Unidentified Error Occured' });
      }
    }
  };

  fetchIDs = async () => {
    this.setState({ isLoading: true });

    try {
      const data = await Axios.get(`${BASE_URL}/topstories.json`);
      this.setState(
        {
          id: data.data,
        },
        () => {
          this.fetchDataFromId();
        }
      );
    } catch (error) {
      if (error.request) {
        this.setState({ errorMsg: 'Could not connect to the internet' });
      } else if (error.response) {
        this.setState({ errorMsg: error.message });
      } else {
        this.setState({ errorMsg: 'Unidentified Error Occured' });
      }
    }
  };

  componentDidMount() {
    this.fetchIDs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedPage !== this.state.selectedPage)
      this.fetchDataFromId();
  }

  render() {
    return (
      <StoriesContext.Provider value={{ data: this.state }}>
        {this.props.children}
      </StoriesContext.Provider>
    );
  }
}

export default StoriesContextWrapper;
