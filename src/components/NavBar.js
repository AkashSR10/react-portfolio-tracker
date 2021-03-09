import React, {useState  } from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar () {
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to ="/" className="nav"> hoi ik ben een router   </Link>
            </div>
            <div className='menu-icon'>
            </div>
            <ul className='nav-menu'>
<li className='nav-item'>
    <Link to='/Ash' className='nav-links'>
        Ash
    </Link>
</li>
<li className='nav-item'>
    <Link to='/Max' className='nav-links'>
        Max
    </Link>
</li>
<li className='nav-item'>
    <Link to='/Paers' className='nav-links'>
        Paers
    </Link>
</li>
            </ul>
        </nav>
        </>
    )
};
