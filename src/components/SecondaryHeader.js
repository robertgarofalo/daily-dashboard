import React, { useState } from 'react'
import './SecondaryHeader.css';
// import { Link } from 'react-router-dom';
// import NewsMain from './NewsMain';

function SecondaryHeader() {
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

    const [ listValue, setListValue ] = useState('Dashboard');

    // const [ pageNames, setPageNames ] = useState([]);

    const clickHandler = (e) => {
        // console.log(e.target.childNodes[0].data)
        
        // add value to the state here
        setListValue(e.target.childNodes[0].data);

        //in the <li> item, if the statename is = to this item.PageName, turn the class on
    }


    return (
       
        <div className="secondary-header-container">
            {/* <ul className='secondary-header-menu'>
                {menuItems.map((item, index) => (
                    <li className={`secondary-header-menu-items`} key={index}>{item}</li>
                ))}


            </ul> */}
            <ul className="secondary-header-menu">
            {menuItems.map((item, index) => (
                <li id={`menu-item-${index}`} key={index} className={`secondary-header-menu-items ${listValue === item.pageName ? 'is-active' : ''}`} onClick={clickHandler} >{item.pageName}</li>
            ))}
            </ul>

            


         </div>

     
    )
}


export default SecondaryHeader
