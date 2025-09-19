/* src/Footer.js */

import React from "react";
import './Footer.css';

function Footer () {
    return(
        <footer className="footer">
            <div className="footer-links">
                <a className="about">About Us</a>
                <a className="privacy">Privacy</a>
                <a className="terms">Terms</a>
            </div>
        </footer>
    );
}

export default Footer;