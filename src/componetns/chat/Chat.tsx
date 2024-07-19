import React, {Component} from 'react';
import "./chat.scss"
import ChatHeader from "./chatHeader";
class Chat extends Component {
    render() {
        return (
            <div className="chat">
                {/*chatHeader*/}
                <ChatHeader  />
                {/*chatMessage*/}
                <div className="chatMessage"></div>
                {/*chatInput*/}
                <div className="chatInput">
                </div>
            </div>
        );
    }
}

export default Chat;