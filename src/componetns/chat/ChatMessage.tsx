import React, {Component} from 'react';
import "./ChatMessaga.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
class ChatMessage extends Component {
    render() {
        return (
            <div className="message">
                <AccountCircleIcon />
                <div>
                    <h4>
                        Masataka
                    </h4>
                    <span className="messageTimeStamp">
                        2024/07/20
                    </span>
                    <p>
                        メッセージ
                    </p>
                </div>
            </div>
        );
    }
}

export default ChatMessage;