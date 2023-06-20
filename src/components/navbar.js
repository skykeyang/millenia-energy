import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to ="/about"> About </Link></li>
                <li><Link to ="/investors"> Investors </Link></li>
                <li><Link to ="/media"> Media </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar