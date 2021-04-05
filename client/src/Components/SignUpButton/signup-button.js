import React from "react"; 
import {Button} from "semantic-ui-react";
import {useAuth0} from '@auth/auth0-react';

const SignUpButton = () => {
    const {loginWIthRedirect} = useAuth0();

return(
<Button color="red" onClick={() => loginWIthRedirect({screen_hint: "signup"})}>Sign Up
</Button>
    )

}

export default SignUpButton;