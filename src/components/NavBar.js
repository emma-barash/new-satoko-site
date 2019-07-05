import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../elements/index.js';

const NavBar = () => {
    return (
        <Nav>
            <Link className="linkedPage" to="/">Home</Link>
            <Link className="linkedPage" to="/about">About</Link>
            <Link className="linkedPage" to="/gallery">Gallery</Link>
            <Link className="linkedPage" to="/blog">Blog</Link>
        </Nav>
    );
};

export default NavBar;