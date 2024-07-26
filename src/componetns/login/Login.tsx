import React from 'react';
import "./Login.scss"
import { Button } from "@mui/material"
import {auth, provider} from "../../firebase";
import {signInWithPopup} from "firebase/auth"



const Login = () => {
    const signIn = () => {
        signInWithPopup(auth, provider)
    }
    return (
        <div>
            <div className="login">
                <div className="loginLogo">
                    <img src="./discordLogo.jpg" alt="Discord"/>
                </div>

                <button onClick={signIn}>
                    Login
                </button>
            </div>
        </div>
    );

}


export default Login;

function signInWithPopup(auth: Auth, provider: firebase.auth.GoogleAuthProvider) {
    throw new Error('Function not implemented.');
}
