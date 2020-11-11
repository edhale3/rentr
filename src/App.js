import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Post from './Post'
import history from './History'


function App() {
  return (
      <BrowserRouter history={History}>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/post" component={Post} exact/>
          <Route component={Error}/>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
