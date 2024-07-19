import React, {Component} from 'react';
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from "./SidebarChannel";
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
class Sidebar extends Component {
    render() {
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
                            <SidebarChannel/>
                            <SidebarChannel/>
                            <SidebarChannel/>
                            <SidebarChannel/>
                        </div>

                        <div className="sidebarFooter">
                            <div className="sidebarAccount">
                                <img src="/logo.png" alt="sidebarFooterIcon"/>

                                <div className="accountName">
                                    <h4>
                                        Masataka
                                    </h4>
                                    <span>
                                    #1027
                                </span>
                                </div>
                            </div>

                            <div className="sidebarVoice">
                                <div>
                                    <MicIcon />
                                    <HeadphonesIcon />
                                    <SettingsIcon />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default Sidebar;