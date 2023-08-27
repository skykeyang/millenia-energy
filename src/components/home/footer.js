import React from 'react'
import { Link } from 'gatsby'
import "./css/footer.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../styles/styles.css"
import { motion } from "framer-motion";

const Footer = () => {
    return (
      <footer className="footer">
      <div className="container footer-container">
          <div className="row">
              <div className="col-md-6 footer-content-wrapper">
                  <Link to="/" ><img src={require("../../images/logobanner_nobg2.png").default} className='footer-logo'></img></Link>
                  <div className="row site-links-row">
                  
                      <div className="col-4 site-links left-site-links">
                          <ul className="list-unstyled">
                          <li className='site-link-item'><Link to="/about"> About </Link></li>
                          <li className='site-link-item'><Link to ="/media"> Media </Link></li>
                          </ul>
                      </div>
                      <div className='col-4 site-links right-site-links'>
                        <ul className="list-unstyled">
                          <li className='site-link-item'><Link to ="/investors"> Investors </Link></li>
                          <li className='site-link-item'><Link to ="/portfolio"> Portfolio </Link></li>
                        </ul>
                      </div>
                      <div className='col-4 empty-col'>

                      </div>
                    
                  </div>
                  {/* <ul className="nav socials">
                      <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link firsticon"><i className="bi bi-facebook fa-lg greyscale"></i></a></li>
                      <li className="nav-item"><a href="https://www.linkedin.com/" className="nav-link"><i className="bi bi-linkedin fa-lg greyscale"></i></a></li>
                      <li className="nav-item"><a href="https://www.youtube.com/" className="nav-link"><i className="bi bi-youtube fa-lg greyscale"></i></a></li>
                  </ul> */}
                  
                  <br />
              </div>
              <div className='col-md-6 footer-right'>
                    <div className='row empty-row'></div>
                    <div className='row location-row'>
                      <div className='location-content'>
                    <i className='bi bi-geo-alt location-icon'></i><span className='location-text'>1 Yishun Industrial Street 1, #08-16A POSH Bizhub, Singapore 768160</span>
                      </div>
                    </div>
  
                    <div className='row info-row'>
                      <div className='info-content'>
                    <i className="bi bi-info-circle info-icon"></i><span className='info-text'>info@millenia-energy.com</span>
                      </div>
                    </div>
                  
              </div>
          </div>
      </div>
      <span className='copyright'>Copyright 2023 Millenia Energy. All rights reserved</span>
  </footer>
    )
}

export default Footer