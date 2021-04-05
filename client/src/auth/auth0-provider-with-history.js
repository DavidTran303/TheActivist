import React from 'react';
import {useHistory} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';



const Auth0ProviderWithHistory = ({children}) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
    
    
    const history = useHistory();

    const onRedirectCallBack = (appState) => {
        history.push(appState?.returnTo || window.location.pathname)
    };

    return(
    <Auth0Provider
    domain ={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
    onRedirectcallback={onRedirectCallBack}
    >
    {children}  
    </Auth0Provider>

    )
}

export default Auth0ProviderWithHistory;

