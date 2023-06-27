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
            <div>
               <div className = 'menu-icon' onClick={toggleShowing} >
                  <div className='smalllogo col-sm-4'>
                     <Link to="/"><img src={require("../images/logobanner_nobg.png").default} className= 'navlogo' alt='logo'></img></Link></div>
                  <i className="bi bi-list"></i>
                  </div>
                  <div className="logo col-4">
                     <Link to="/"><img src={require("../images/logobanner_nobg.png").default} className= 'navlogo' alt='logo'></img></Link>
                  </div>
               <div className="menu row navbarrow">
                  <ul className= {isShowing ? 'showing':null}>
                    <li className= {isCol ? 'col-md-2':'col'} id="about"><Link to ="/about"> ABOUT </Link></li>
                    <li className={isCol ? 'col-md-2':'col'} id="investors"><Link to ="/investors"> INVESTORS </Link></li>
                    <li className={isCol ? 'col-md-2':'col'} id="media"><Link to ="/media"> MEDIA </Link></li>
                    <li className={isCol ? 'col-md-2':'col'} id="portfolio"><Link to ="/"> PORTFOLIO </Link></li>
                  </ul>
               </div>
            </div>
            </nav>
         </header>
      </div>
    )
}

export default Navbar