import './About.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NAV from '../../statics/Nav';
import {
    AppBar,
    Toolbar,
  } from '@mui/material';
// import { motion } from 'framer-motion';

function About(){
    const pageLinks = 
        (
            <div>
                <Link className={`nav-links-active`} 
                to={'/'}
                >About doi</Link>
            </div>
        )
    return(
        <div className='container'>
            <div className="about">
                
            </div>
        </div>
    )
}

export default About;