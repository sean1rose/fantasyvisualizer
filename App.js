import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Quarterbacks from './Quarterbacks';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/quarterbacks' component={Quarterbacks} />
          <Route render={() => {
            return <p>Not Found</p>
          }} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;