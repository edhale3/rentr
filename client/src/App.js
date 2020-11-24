import React, { useScript } from 'react'
import { BrowserRouter, Route, Switch, useHistory as history} from 'react-router-dom';

import Home from './Home'
import Post from './Post'

function App() {
  // const [loaded, error] = useScript(
  //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyA20z-stnuTCeJeUVwqIpu-Dw_2BcAaBj8&libraries=places"
  // );
  return (
      <BrowserRouter history={history}>
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
