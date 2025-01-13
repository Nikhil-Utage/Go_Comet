import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="navbar">
            <div className="logo-container">
                <img src='https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/286ebfc6c07d6a38969da05b673b21be6e89eab3/book-my-hotel-logo.svg' className="logo" alt="Logo" />
                <span className="site-title">EduLink</span>
            </div>
            
            {/* Desktop Menu */}
            <ul className="desktop-menu">
                <li>
                    <Link to="/" className="menu-item">Home</Link>
                </li>
                <li>
                    <Link to="/" className="menu-item">Hotels</Link>
                </li>
                <li>
                    <Link to="/" className="menu-item">Places</Link>
                </li>
            </ul>

            <div className="sign-in-container">
                <Link to="/" className="sign-in">
                    Sign In
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon">
                <button onClick={toggleMenu} className="menu-toggle">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <button onClick={toggleMenu} className="close-menu">
                    <FaTimes />
                </button>
                <Link to="/" className="mobile-menu-item" onClick={toggleMenu}>Home</Link>
                <Link to="/" className="mobile-menu-item" onClick={toggleMenu}>Hotels</Link>
                <Link to="/" className="mobile-menu-item" onClick={toggleMenu}>Places</Link>
            </div>
        </section>
    );
};

export default Navbar;
