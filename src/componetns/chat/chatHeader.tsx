import React, {Component} from 'react';
import "./ChatHeader.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

type Props = {
    channelName : string | null;

};


const ChatHeader = (props : Props) => {
    const {channelName} = props;
    return (
        <div>
            <div className="chatHeader">
                <div className="chatHeaderLeft">
                    <h3>
                        <span className="chatHeaderHash">#</span>
                        {channelName}
                    </h3>
                </div>

                <div className="chatHeaderRight">
                    <NotificationsIcon/>
                    <PushPinIcon/>
                    <GroupIcon/>
                    <div className="chatHeaderSearch">
                        <input type="text" placeholder={"検索"}/>
                        <SearchIcon/>
                    </div>
                    <SendIcon/>
                    <HelpIcon/>
                </div>
            </div>
        </div>
    );
}


export default ChatHeader;