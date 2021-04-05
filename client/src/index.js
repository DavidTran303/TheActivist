import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router}  from 'react-router-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import Auth0ProviderWithHistory from '../auth/auth0-provider-with-history';


ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);


