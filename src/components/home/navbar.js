import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'gatsby'
import "./css/header.css"


const Navbar = () => {

   const [isIOS, setUserAgent] = useState(false);

   const detectUserAgent = () => { 
   if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      setUserAgent(true);
   }
   console.log(isIOS);
   }

   useEffect(() => {
      detectUserAgent();
   }, []);

    const [IsMobile, setIsMobile] = useState(false);
    const toggleMobile = () => {
        setIsMobile(!IsMobile);
    }



    const [isShowing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!isShowing);
    };

    const [isDropdownVisible, setDropdownVisible] = useState('none');

    const handleMouseEnter = () => {
      setDropdownVisible('block');
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible('none');
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
               {/* <div className={`menu navbarrow ${IsMobile ? 'col-8':''}`}> */}
               <div className= 'menu navbarrow col'>
                  <ul className= {`backblurred ${isShowing ? 'showing': null} ${isIOS ? 'opaque' : null}`} >
                    <li id="about"><Link to ="/about"> about </Link></li>
                    <li id="investors" onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                                          <Link to="/investors/funding_initiatives">investors</Link> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                                      <path d="M5.85217 9L0.656021 0.75L11.0483 0.75L5.85217 9Z" fill="#3A4A01" fill-opacity="0.8"/>
                                                   </svg>
                                          
                     </li>
                     <div className="dropdown-menu" style={{display: `${isDropdownVisible}`}}  onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                             
                                          <Link to="/investors/funding_initiatives" className='dropdown-item'>Funding Initiatives</Link>
                                          <Link to="/investors/investment_opportunities" className='dropdown-item'>Investment Opportunities</Link>
                                             
                     </div>
                     <li id="funding-initiatives"><Link to ="/investors/funding_initiatives"> Funding Initiatives </Link></li>
                    <li id="investment-opportunities"><Link to ="/investors/investment_opportunities"> Investment Opportunities </Link></li>
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