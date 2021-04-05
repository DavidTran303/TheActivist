import React from 'react'
import {Button} from 'semantic-ui-react'
import {useAuth0} from '@auth0/auth0-react'


const LoginOutButton = () => {
    const {logout} = useAuth0()

    return(
    <Button color='green' onClick={() => logout({returnTo: window.location.origin})}>Login Out</Button>
    )
}

export default LoginOutButton;
