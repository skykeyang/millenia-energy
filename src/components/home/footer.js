import React from 'react'
import { Link } from 'gatsby'
import "./css/footer.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../styles/styles.css"

const Footer = () => {
    return (
      <footer className="row footer">
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-6">
                  <img src={require("../../images/logobanner_nobg.png").default} className='footer-logo'></img>
                  <div className="row">
                  
                      <div className="col-6 site-links">
                          <ul className="list-unstyled">
                          <li><Link to="/"> Home </Link></li>
                          <li><Link to ="/about"> About </Link></li>
                          </ul>
                      </div>
                      <div className='col-6 site-links'>
                        <ul className="list-unstyled">
                          <li><Link to ="/investors"> Investors </Link></li>
                          <li><Link to ="/media"> Media </Link></li>
                        </ul>
                      </div>
                    
                  </div>
                  <ul className="nav socials">
                      <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link firsticon"><i className="bi bi-facebook fa-lg greyscale"></i></a></li>
                      <li className="nav-item"><a href="https://twitter.com/" className="nav-link"><i className="bi bi-twitter fa-lg greyscale"></i></a></li>
                      <li className="nav-item"><a href="https://www.linkedin.com/" className="nav-link"><i className="bi bi-linkedin fa-lg greyscale"></i></a></li>
                      <li className="nav-item"><a href="https://www.youtube.com/" className="nav-link"><i className="bi bi-youtube fa-lg greyscale"></i></a></li>
                  </ul>
                  
                  <br />
              </div>
              <div className='col-md-6 d-flex justify-content-center'>
                <table className='footertable'>
                  <tbody>
                  <tr>
                    <td className='footertd'>
                      <h1><i className='bi bi-geo-alt-fill'></i></h1>
                    </td>
                    <td className='footertd'>
                      1 Yishun Industrial Street 1, #08-16 A POSH Bizhub, Singapore 768160
                    </td>
                  
                    <td className='footertd'>
                      <h1><i className="bi bi-info-circle-fill"></i></h1>
                    </td>
                    <td className='footertd'>
                      info@millenia-energy.com
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
          {/* <div className='row'> */}
            <div className='col-xl copyright'>
            <span>Copyright 2023 Millenia Energy. All rights reserved</span>
            </div>
          {/* </div> */}

              
          </div>
          
      </div>
  </footer>
    )
}

export default Footer