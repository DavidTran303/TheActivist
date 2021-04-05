import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Card from "./Components/Card/CardData";
import Home from "./pages/Home";
import LoginButton from './Components/LoginButton/login-button';
import {Auth0Provider} from '@auth0/auth0-react';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
  <div className="App">
    <h1>The Activist</h1>
    
  <Router>
    <Auth0Provider
      domain="dev-ft7yxi8g.us.auth0.com" 
      clientId="vRAZo7Q2twlUykhoSuYRorpezOTBEy1c"
      redirectUri={window.location.origin}
    >
    <Nav/>
    <Switch>
    <Route exact path={"/"}> 
      <Home />
    </Route>
    <Route exact path ={"/login"}>
      <LoginButton/> 
    </Route>
    <Card />
    </Switch>
    </Auth0Provider>
  </Router>
  
    </div>
  );
}

export default App;
