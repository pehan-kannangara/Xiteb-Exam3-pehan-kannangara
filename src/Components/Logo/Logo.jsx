import React from 'react';
import './Logo.css';
import img5 from '../../Pics/p5.png';


const Logo = () => {
    return (
        <div className="logo-section">
            <img src={img5} alt="Logos" className="logo" />
        </div>
    );
};

export default Logo;
