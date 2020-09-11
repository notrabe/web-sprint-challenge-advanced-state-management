import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Smurfs from './Smurfs';
import Navigation from "./Nav";
import AddModal from './SmurfsForm';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={AddModal}/>
      </Switch>
    </>
  )
}

export default App;