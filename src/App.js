import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Post from './Post'


function App() {
  return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/post" component={Post} exact/>
          <Route component={Error}/>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
