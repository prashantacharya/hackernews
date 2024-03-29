import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Story from './Pages/Story';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={ROUTES.storiesPage}>
            <Story />
          </Route>
          <Route path={ROUTES.homePage}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
