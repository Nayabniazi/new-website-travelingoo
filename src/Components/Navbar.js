import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import "../css/Navbar.css";

import Button from '../Button';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/About">
          <img src='./imgs/logo.png' alt="Logo" />
        </Link>
      </div>

      {/* Toggle Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </div>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links active" : "nav-links"}>
        
        {/* Flight Dropdown */}
        <li className="nav-item">
          <span className="nav-link" onClick={() => toggleDropdown("flight")} style={{ marginTop: '2px', fontSize: '18px' }}>
            Flight
          </span>
          {activeDropdown === "flight" && (
            <div className="submenu">
              <div className="submenu-left">
                <Link to="/About">Austin, TX</Link>
                <Link to="/Dollas">Dallas, TX</Link>
                <Link to="/LosAngeles">Los Angeles, CA</Link>
                <Link to="/Nashville">Nashville, TN</Link>
                <Link to="/Orlando">Orlando, FL</Link>
                <Link to="/SanDiego">San Diego, CA</Link>
                <Link to="/SanJose">San Jose, CA</Link>
                <Link to="/Walnut">Walnut Creek</Link>
              </div>
              <div className="submenu-right">
                <Link to="/Chicago">Chicago, CA</Link>
                <Link to="/Houston">Houston, TX</Link>
                <Link to="/Miami">Miami, FL</Link>
                <Link to="/Napavalley">Napa Valley</Link>
                <Link to="/Newyork">New York</Link>
                <Link to="/Anto">San Antonio</Link>
                <Link to="/Franchisco">San Francisco</Link>
              </div>
            </div>
          )}
        </li>

        {/* Service Dropdown */}
        <li className="nav-item">
          <span className="nav-link" onClick={() => toggleDropdown("service")} style={{ fontSize: '19px' }}>
            Service
          </span>
          {activeDropdown === "service" && (
            <ul className="dropdown-menu">
              <li><Link to="/Airport">Airport Transfer</Link></li>
              <li><Link to="/Coprate">Corporate Transfer</Link></li>
              <li><Link to="/Grouptravel">Group Travel</Link></li>
              <li><Link to="/Intercity">Innercity and intercity rides</Link></li>
              <li><Link to="/Tour">Special Tour</Link></li>
              <li><Link to="/about">Solution</Link></li>
              <li><Link to="/Solution">Car Rental</Link></li>
              <li><Link to="/Chaufur">Chauffeur Service</Link></li>
              <li><Link to="/Limo">Limo Services</Link></li>
              <li><Link to="/Topdestination">Top Destination</Link></li>
              <li><Link to="/TopRoutes">Top Routes</Link></li>
              <li><Link to="/Van">Van Service</Link></li>
              <li><Link to="/Ski">Ski Transfer</Link></li>
            </ul>
          )}
        </li>

        {/* Solutions Dropdown */}
        <li className="nav-item">
          <span className="nav-link" onClick={() => toggleDropdown("solutions")} style={{ fontSize: '19px' }}>
            Solutions
          </span>
          {activeDropdown === "solutions" && (
            <ul className="dropdown-menu">
              <li><Link to="/platform">Corporate Transportation Platform</Link></li>
              <li><Link to="/Login">Drive with Us</Link></li>
            </ul>
          )}
        </li>

        {/* Other Links */}
        <li style={{ marginTop: '10px' }}><Link to="/Login">Support</Link></li>
        <li style={{ marginTop: '10px' }}><Link to="/Faqs">Faqs</Link></li>

        {/* My Account Button */}
        <Button to="/login" text="My Account" />
      </ul>
    </nav>
  );
};

export default Navbar;
