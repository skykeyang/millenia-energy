import React from 'react'
import { useState } from 'react';
import { Link } from 'gatsby'
// import classNames from 'classnames';
import "./css/header.css"


const Navbar = () => {

    const [isCol, setCol] = useState(false);
    const toggleCol = () => {
        setCol(!isCol);
    }



    const [isShowing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!isShowing);
    };


    return (
   
        <div className="wrapper">
         <header>
            <nav>
            <div className='navbar-wrap'>
               <div className = 'menu-icon' >
                  <div className='smalllogo col-sm-4'>
                     <Link to="/"><img src={require("../../images/logobanner_nobg2.png").default} className= 'navlogo' alt='logo'></img></Link></div>
                  <i className="bi bi-list" onClick={toggleShowing}></i>
                  </div>
                  <div className="logo col-4">
                     <Link to="/"><img src={require("../../images/logobanner_nobg2.png").default} className= 'navlogo' alt='logo'></img></Link>
                  </div>
               <div className="menu col-8 navbarrow">
                  <ul className= {isShowing ? 'showing':null}>
                    <li id="about"><Link to ="/about"> about </Link></li>
                    <li id="investors"><Link to ="/investors"> investors </Link></li>
                    <li id="media"><Link to ="/media"> media </Link></li>
                    <li id="portfolio"><Link to ="/portfolio"> portfolio </Link></li>
                  </ul>
               </div>
            </div>
            </nav>
         </header>
      </div>
    )
}

export default Navbar