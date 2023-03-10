import { dblClick } from '@testing-library/user-event/dist/click';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../App.css";
import UserContext from '../contexts/UserContext';
import {useState, useEffect, useContext} from "react";
import "../navbar.css"


const NavBar = () => {
  const { theUser, logout } = useContext(UserContext)
  return (
    <div className="navbar">
    <nav>
    <div
        className="navigation-menu">
      <ul>
     
      {!theUser && <li><Link to ="/login">Login</Link></li>}
      {theUser && <li onClick={()=>{logout()}}><Link>Log Out</Link></li>}
        
        <li><Link to ="/gallery">Track Partners</Link></li>

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


