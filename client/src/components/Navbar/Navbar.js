import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NAV from '../../statics/Nav';
import {
    AppBar,
    Toolbar,
  } from '@mui/material';
import './Navbar.css';
// import { motion } from 'framer-motion';

function Navbar(){
    const location = useLocation();
    
    const pageLinks = NAV.map(({ TITLE, REF }, index) => {
        let active = REF === location.pathname ? 'active' : '';
        return (
            <React.Fragment>
                {active ? (
                <Link className={`nav-links ${active}`} 
                to={REF}
                >{TITLE}</Link>
                ) : (
                <Link className={`nav-links`} 
                to={REF}
                style={{zIndex: `${8-index}`}}
                >{TITLE}</Link>)}

            </React.Fragment>
        )
    })
    return (
        <div className="nav">
                <div className='blank-space'></div>
                <div className="navbar-toolbar">
                    {pageLinks}
                </div>
        </div>
    )
}

export default Navbar;
