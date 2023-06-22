import React from 'react'
import { useState } from 'react';
import { Link } from 'gatsby'
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
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

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
            <nav>
               <div className={isActive ? 'showing':null} menu-icon onClick={toggleClass} >
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
                  <Link to="/"><img src={require("../images/logobanner_nobg.png").default} className= 'navlogo'></img></Link>
               </div>
               <div className="menu">
                  <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to ="/about"> About </Link></li>
                    <li><Link to ="/investors"> Investors </Link></li>
                    <li><Link to ="/media"> Media </Link></li>
                  </ul>
               </div>
            </nav>
         </header>
      </div>
    )
}

export default Navbar