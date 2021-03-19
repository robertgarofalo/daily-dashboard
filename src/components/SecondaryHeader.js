import React, { useState, useEffect } from 'react'
import './SecondaryHeader.css';
// import { Link } from 'react-router-dom';
// import NewsMain from './NewsMain';

function SecondaryHeader({currentComponent}) {
    // const menuItems = ['Dashboard', 'News', 'Weather', 'Messages', 'Calendar'];
    const menuItems = [
        {
            pageName: 'Dashboard',
            path: '/',
            component: './NewsMain.js'
        },

        {
            pageName: 'News',
            path: '/news',
            component: './NewsMain.js'
        },

        {
            pageName: 'Weather',
            path: '/weather',
            component: './NewsMain.js'
        },
        
        {
            pageName: 'Messages',
            path: '/messages',
            component: './NewsMain.js'
        },

        {
            pageName: 'Calendar',
            path: '/calendar',
            component: './NewsMain.js'
        }
        
    ];


    const [ secondaryListItem, setSecondaryListItem ] = useState('Dashboard');

    const clickHandler = (e) => {

        setSecondaryListItem(e.target.id);
        currentComponent(e.target.id);
    }


    return (
       
        <div className="secondary-header-container">
      
            <ul className="secondary-header-menu">
            {menuItems.map((item, index) => (
                <li id={item.pageName} key={index} className={`secondary-header-menu-items ${secondaryListItem === item.pageName ? 'is-active' : ''}`} onClick={clickHandler} >{item.pageName}</li>
            ))}
            </ul>
         </div>

     
    )
}


export default SecondaryHeader