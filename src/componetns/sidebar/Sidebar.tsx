import React, {Component, useEffect, useState} from 'react';
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from "./SidebarChannel";
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import {auth, db} from "../../firebase";
import { useAppSelector} from "../../app/hooks";
import useCollection from "../../hooks/useCollection";


const Sidebar = () => {
    // useState<Channel[]>　→　これでinterfaceで宣言したものに適したもののみを入れる
    const user = useAppSelector((state) => state.user)
    const {} = useCollection("channels")
    return (
        <div className="sidebar">
            {/*    SidebarRight*/}

            <div className="sidebarLeft">

                <div className="serverIcon">
                    <img src="/heart.png" alt="heart"/>
                </div>
                <div className="serverIcon">
                    <img src="/heart.png" alt="heart"/>
                </div>

            </div>

            {/*    SidebarLeft*/}
            <div className="sidebarRight">
                <div className="sidebarTop">
                    <h3>
                        Discord
                    </h3>
                    <ExpandMoreIcon/>
                </div>


                {/*    sidebarChannels*/}

                <div className="sidebarChannels">
                    <div className="sidebarChannelsHeader">
                        <div className="sidebarHeader">

                            <ExpandMoreIcon/>
                            <h4>
                                タイプ練習
                            </h4>
                        </div>
                        <AddIcon className="sidebarIcon"/>
                    </div>

                    <div className="sidebarChannelList">
                        {channels.map( (channel)  =>(
                        <SidebarChannel channel={channel} id = {channel.id} key = {channel.id}/>
                        ))}
                        {/*// <SidebarChannel/>*/}
                        {/*// <SidebarChannel/>*/}
                        {/*// <SidebarChannel/>*/}
                    </div>

                    <div className="sidebarFooter">
                        <div className="sidebarAccount">
                            {/*なんではてなを付けるの？　→　ユーザーの画像が選択されてないのにログインする＝初期アイコンでログインすることになる時もある、その時画像がないですよってならないようにする*/}
                            <img src={user?.photo} alt="sidebarFooterIcon" onClick={() => auth.signOut()}/>
                            <div className="accountName">
                                <h4>
                                    {user?.displayName}
                                </h4>
                                <span>
                                    #{user?.uid.substring(0,4)}
                                </span>
                            </div>
                        </div>

                        <div className="sidebarVoice">
                            <div>
                                <MicIcon/>
                                <HeadphonesIcon/>
                                <SettingsIcon/>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}


export default Sidebar;