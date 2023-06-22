import React from 'react'
import { Link } from 'gatsby'
import "./css/header.css"
const Navbar = () => {
    return (
        <div className='container'>
            <div className='row'>
        <nav>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to ="/about"> About </Link></li>
                <li><Link to ="/investors"> Investors </Link></li>
                <li><Link to ="/media"> Media </Link></li>
            </ul>
        </nav>
        </div>
        </div>
    )
}

export default Navbar