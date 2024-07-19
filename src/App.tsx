import React from 'react';

import './App.scss';
import Sidebar from "./componetns/sidebar/Sidebar";
import Chat from "./componetns/chat/Chat";


function App() {
    return (
        <div className="App">
        {/*    Sidebar*/}
            <Sidebar />

        {/*   chat */}
            <Chat />
        </div>
    );
}

export default App;
