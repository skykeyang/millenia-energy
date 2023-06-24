import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'gatsby'
import classNames from 'classnames';
import "./css/header.css"
// $(document).ready(function() {
//     $(".menu-icon").on("click", function() {
//           $("nav ul").toggleClass("showing");
//     });
// });

// Scrolling Effect

// $(window).on("scroll", function() {
//     if($(window).scrollTop()) {
//           $('nav').addClass('black');
//     }

//     else {
//           $('nav').removeClass('black');
//     }
// })

const Navbar = () => {

    const [isCol, setCol] = useState(false);
    const toggleCol = () => {
        setCol(!isCol);
    }



    const [isShowing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!isShowing);
    };

    const isAtscrollTop = () => {
        if (document.scrollTop()) {
            return true
        }
        return false
    }

    var navClasses = classNames(
        'black',
        ''
    )

    return (
        // <div className='container'>
        //     <div className='row'>
        // <nav>
        //     <ul>
                // <li><Link to="/"> Home </Link></li>
                // <li><Link to ="/about"> About </Link></li>
                // <li><Link to ="/investors"> Investors </Link></li>
                // <li><Link to ="/media"> Media </Link></li>
        //     </ul>
        // </nav>
        // </div>
        // </div>
        <div className="wrapper">
         <header>
            <nav className='container-fluid'>
            <div style={{width:'100%'}} >
               <div className = 'menu-icon' onClick={toggleShowing} >
                    <div className='smalllogo'><Link to="/"><img src={require("../images/logobanner_nobg.png").default} className= 'navlogo'></img></Link></div>
                    <i className="bi bi-list"></i>
               </div>
               <div className="logo col-4">
                  <Link to="/"><img src={require("../images/logobanner_nobg.png").default} className= 'navlogo'></img></Link>
               </div>
               <div className="menu row">
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