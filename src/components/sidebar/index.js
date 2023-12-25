import React from "react";
import * as C from './style';
import SideBarHeader from './sidebarHeader/index';
import SideBarChat from './sidebarChats/index';


const Sidebar = ({ setUserChat, userChat }) =>{
    return(
        <C.Container>
            <SideBarHeader setUserImg={setUserChat}/>
            <SideBarChat setUserChat={setUserChat} userChat={userChat}/>
        </C.Container>
    )
};

export default Sidebar;