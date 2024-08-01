import React, {Component} from 'react';
import "./SidebarChannel.scss"
import {DocumentData} from "firebase/firestore"

type  Props = {
    id: string
    channel: DocumentData
}
const SidebarChannel = (props : Props) => {
    const {id , channel} = props;
    // console.log(channel) →　ログを見るとchannel のなかのchannelのなかのchannelNameということがわかる
    return (
        <div className="sidebarChannel">
            <h4>
                    <span className="sidebarChannelsHash">
                        #{channel.channel.channelName}
                    </span>
            </h4>
        </div>
    );
}


export default SidebarChannel;