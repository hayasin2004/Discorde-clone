import React, {useEffect} from 'react';

import './App.scss';
import Sidebar from "./componetns/sidebar/Sidebar";
import Chat from "./componetns/chat/Chat";
import {login, logout, userSlice} from "./features/userSlice";
import {useSelector} from "react-redux";
import Login from "./componetns/login/Login";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {auth} from "./firebase";
import { ErrorBoundary } from "react-error-boundary";
import  { ErrorFallBack } from  "./utils/ErrorFallBack"

function App() {

    const user = useAppSelector((state) => state.user);
    // const user = null;
    const dispatch = useAppDispatch()
    useEffect(() => {
        auth.onAuthStateChanged((loginUser) => {
            console.log(loginUser)
            if (loginUser) {
                dispatch(login({
                    uid : loginUser.uid,
                    photo :  loginUser.photoURL,
                    email : loginUser.email,
                    displayName : loginUser.displayName
                }))
            }else {
                dispatch(logout({}));
            }
        })
    } , [])

    return (

    <div className="App">
        {user ? (
            <>
                {/*    Sidebar*/}
                <ErrorBoundary  FallbackComponent={ErrorFallBack}>
                <Sidebar/>
                </ErrorBoundary>

                {/*   chat */}
                <Chat/>
            </>
        ) : (
            <>
                <Login />
            </>
        )}
    </div>

    );

}

export default App;
