import { dblClick } from '@testing-library/user-event/dist/click';
import React, { useContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../App.css";
import UserContext from '../contexts/UserContext';
import "../navbar.css"


const NavBar = () => {

  return (
    <div className="navbar">
    <nav>
    <div
        className="navigation-menu">
      <ul>
        <li><Link to ="/login">Login</Link></li>
        
        <li><Link to ="/gallery">Gallery</Link></li>

        <li><Link to ="/appointments">Book a Track</Link></li>

        <li><Link to ="/services">Garage</Link></li>

        <li><Link to ="/contact">Contact</Link></li>

        <li><Link to ="/about">About</Link></li>

      </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar;

