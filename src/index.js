import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import StoriesContextWrapper from './Context/StoriesContext';

import './styles/index.css';

ReactDOM.render(
  <StoriesContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoriesContextWrapper>,
  document.getElementById('root')
);
