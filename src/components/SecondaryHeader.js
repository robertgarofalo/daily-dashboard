import React from 'react'
import './SecondaryHeader.css';

function SecondaryHeader() {
    const menuItems = ['Dashboard', 'News', 'Weather', 'Messages', 'Stock Market', 'Calendar'];

    return (
       
        <div className="secondary-header-container">
            <ul className='secondary-header-menu'>
                {menuItems.map((item, index) => (
                    <li className='secondary-header-menu-items' key={`item-${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


export default SecondaryHeader
