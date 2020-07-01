import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavbarCS from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
              <NavbarCS/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
              </Switch>
                
            
       </BrowserRouter>
      
    );
  }
}

export default App;
