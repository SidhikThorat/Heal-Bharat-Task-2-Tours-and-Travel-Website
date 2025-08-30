import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero" role="banner" aria-label="Hero">
      <video className="position-absolute w-100 h-100 object-fit-cover" src="https://cdn.coverr.co/videos/coverr-the-mountain-side-1903/1080p.mp4" autoPlay muted loop playsInline></video>
      <div className="container hero-content text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.1}} className="display-4 fw-bold">
          Discover your next adventure
        </motion.h1>
        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.25}} className="lead mb-4">
          Handpicked destinations, seamless bookings, unforgettable memories.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} className="d-flex gap-2 justify-content-center">
          <Link to="/destinations" className="btn btn-primary btn-lg">Explore Destinations</Link>
          <Link to="/packages" className="btn btn-accent btn-lg">View Packages</Link>
        </motion.div>
      </div>
    </section>
  )
}
