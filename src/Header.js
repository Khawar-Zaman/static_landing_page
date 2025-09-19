/* src/Header.js */

import React from 'react';
import './Header.css';
import logo from './images/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header-logo"><img src={logo} href="#logo" className="header-image" alt="Logo"></img></div>
            <nav className="header-nav">
                <a href="#features" className="nav-link">Features</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
        </header>
    );
}

export default Header;