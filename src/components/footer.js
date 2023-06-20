import React from 'react'
import { Link } from 'gatsby'
import "./css/footer.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../styles/styles.css"

const Footer = () => {
    return (
        <footer className="footer">
    <ul className="social-icon">
      <li className="social-icon__item"><a className="bi bi-facebook" href="https://www.facebook.com/">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="bi bi-twitter" href="https://twitter.com/">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="bi bi-linkedin" href="https://www.linkedin.com/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="bi bi-instagram" href="https://www.youtube.com/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><Link to="/" >Home</Link></li>
      <li className="menu__item"><Link to="/about"> About </Link></li>
      <li className="menu__item"><Link to="/investors"> Investors </Link></li>
      <li className="menu__item"><Link to="/media"> Media </Link></li>
      <li className="menu__item"><Link to="/"> Contact </Link></li>

    </ul>
    <p>&copy;2023 Millenia Energy | All Rights Reserved</p>
  </footer>
    )
}

export default Footer