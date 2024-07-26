import React from 'react';

import './App.scss';
import Sidebar from "./componetns/sidebar/Sidebar";
import Chat from "./componetns/chat/Chat";
import {userSlice} from "./features/userSlice";
import {useSelector} from "react-redux";
import Login from "./componetns/login/Login";
import {useAppSelector} from "./app/hooks";


function App() {

    const user = useAppSelector((state) => state.user);
    // const user = null;
    return (

    <div className="App">
        {user ? (
            <>
                {/*    Sidebar*/}
                <Sidebar/>

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
