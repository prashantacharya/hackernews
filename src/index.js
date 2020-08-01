import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/index.css';
import StoriesContextWrapper from './Context/StoriesContext';

ReactDOM.render(
  <StoriesContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoriesContextWrapper>,
  document.getElementById('root')
);
