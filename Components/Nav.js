import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../pages/img/logo.jpeg';
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo img">
            <img
            src={logo}
            
        
          />
            </div>
            <ul className="navbar-links">
                <li><Link to="/Home">HOME</Link></li>
                <li><Link to="/Acc">ACCOMMODATIONS</Link></li>
                <li><Link to="/offers">OFFERS</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                
            </ul>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    <li><Link to="/Book" className="book-btn">BOOK NOW</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

