import React from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav> 
        <div>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div>
                <button>Sing In</button>
                <button>Sign Up</button>
            </div>
        </div>
        </nav>
    );  
};

export default Nav;