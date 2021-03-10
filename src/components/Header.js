import React from 'react'
import { IoChatbubbleOutline, IoNotificationsOutline, IoPersonCircleOutline, IoAppsSharp  } from "react-icons/io5";
import { IconContext } from 'react-icons/lib';
import './Header.css';

function Header() {
    return (
        <IconContext.Provider value={{ className: 'header-icons' }}>
        <div className="header-container">
            
            <div className="header-icon">
            <IoAppsSharp />
            </div>
            
            <div className="header-icon-box">
                <IoChatbubbleOutline />
                <IoNotificationsOutline />
                <IoPersonCircleOutline />
            </div>
           
        </div>
        </IconContext.Provider>
    )
}

export default Header
