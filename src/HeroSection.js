/* src/HeroSection.js */

import React from "react";
import './HeroSection.css';

function HeroSection () {
    return(
        <main className="hero-section">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-description">
            Our innovative solution simplifies complex tasks, helping you and your team
            achieve more with less effort.
            </p>
            <button className="hero-button">Get Started</button>
        </main>
    );
}

export default HeroSection;