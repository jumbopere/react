import React, { Component } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';

import { setCurrentUser, logoutUser } from './actions/authentication';

import Navba from './components/Navba';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer'
import Confirm from './components/Confirm';



if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}


class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      <Router>
          <div>
            <Navba />
              <Route exact path="/" component={ Home } />
              
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path = "/confirm" component={Confirm}></Route>
              <Footer/>
          </div>
        
        </Router>
        </Provider>
    );
  }
}

export default App;