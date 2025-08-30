import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-5 bg-white border-top">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <h5>Travel Explorer</h5>
            <p className="text-muted">Making your journeys effortless, exciting, and unforgettable.</p>
          </div>
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/booking">Book a Tour</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" aria-label="GitHub"><FaGithub/></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin/></a>
              <a href="#" aria-label="Instagram"><FaInstagram/></a>
            </div>
          </div>
        </div>
        <div className="text-center text-muted small mt-3">© {new Date().getFullYear()} Travel Explorer. All rights reserved.</div>
      </div>
    </footer>
  )
}
