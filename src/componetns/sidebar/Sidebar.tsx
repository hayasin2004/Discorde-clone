import React, {Component} from 'react';
import "./Sidebar.scss"
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
            {/*    SidebarRight*/}

                <div className="sidebarLeft">

                    <div className="serverIcon" >
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
                    </div>
                </div>

            </div>
        );
    }
}

export default Sidebar;