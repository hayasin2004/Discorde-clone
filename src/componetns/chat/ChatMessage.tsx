import React, {Component} from 'react';
import "./ChatMessaga.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const ChatMessage = () => {

    return (
        <div className="message">
            <AccountCircleIcon/>
            <div className="messageInfo">
                <h4>
                    Masataka
                    <span className="messageTimeStamp">
                        2024/07/20
                </span>
                </h4>
                <p>
                    メッセージ
                </p>
            </div>
        </div>
    );
}


export default ChatMessage;

