import React from "react";
import { Auth, Provider } from "firebase/auth";
import * as  C from './style';
import { auth, provider } from "../../services/FiraBase";

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert)
    };

    return (
        
        <C.Container>
                <C.button onClick={handleSignin}>Login with google</C.button>
        </C.Container>
    )
}

export default Login