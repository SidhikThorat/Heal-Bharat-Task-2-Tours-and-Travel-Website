import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPlaneDeparture } from 'react-icons/fa'

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FaPlaneDeparture size={22} /><span>Travel Explorer</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/destinations">Destinations</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/packages">Tour Packages</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/booking">Book</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <div className="ms-lg-3">
            <NavLink to="/booking" className="btn btn-primary">Book Now</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
