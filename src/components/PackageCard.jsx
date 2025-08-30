import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PackageCard({ p }){
  return (
    <motion.div layout className="card h-100 card-hover" data-aos="fade-up">
      <img src={p.image} className="card-img-top" alt={p.title} loading="lazy"/>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{p.title}</h5>
          <span className="badge badge-soft">{p.duration}</span>
        </div>
        <p className="text-muted small mb-2">{p.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>₹{p.price.toLocaleString()}</strong>
          <Link to="/booking" state={{ packageId: p.id }} className="btn btn-sm btn-primary">Book Optics</Link>
        </div>
      </div>
    </motion.div>
  )
}
