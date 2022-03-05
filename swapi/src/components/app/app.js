import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import MyContext from '../swapi-context/context';
import SwapiService from '../../services/swapi-service';
import './app.css';

const swapi = new SwapiService();

const App = () => {

  return (
    <Router>
      <Switch>
        <div>
          <MyContext.Provider value={swapi}>
            <Header />
            <RandomPlanet />
            <Route path="/" exact component={PeoplePage} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} />
          </MyContext.Provider>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
