import React from 'react';
import "./ChatMessaga.scss"
import {Timestamp} from "firebase/firestore";
import {Avatar} from "@mui/material";


type Props = {
    timestamp : Timestamp;
    message : string;
    user : {
        uid : string ;
        photo : string ;
        email : string ;
        displayName : string ;

    };
}

const ChatMessage = (props: Props) => {
    const {message , timestamp , user} = props;
    // console.log("これは時刻の表示です", timestamp)
    return (
        <div className="message">
            <Avatar　src={user?.photo}/>
            <div className="messageInfo">
                <h4>
                    {/*　?　→　これ書かないとエラー*/}
                    {user?.displayName}
                    <span className="messageTimeStamp">
                        { new Date(timestamp?.toDate()).toLocaleDateString()}

                    </span>
                </h4>
                <p className="break-word">
                    {message}
                </p>
            </div>
        </div>
    );
}


export default ChatMessage;

