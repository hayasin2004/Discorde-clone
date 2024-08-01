import React from 'react';
import "./Login.scss"
import { Button } from "@mui/material"
import { getAuth, signInWithPopup} from "firebase/auth";
import {provider} from "../../firebase";

const auth = getAuth();
const Login = () => {
    const signIn = () => {
        signInWithPopup(auth, provider).catch((err) => {
            alert(err.message)
        })
    }
    return (
            <div className="login">
                <div className="loginLogo">
                    <img src="./discordLogo.jpg" alt="Discord"/>
                </div>

                <button onClick={signIn}>
                    Login
                </button>
            </div>

    );

}


export default Login;

