import React from 'react'
import { motion } from 'framer-motion'

export default function DestinationCard({ d }){
  return (
    <motion.div layout className="card h-100 card-hover" data-aos="fade-up">
      <img src={d.image} className="card-img-top" alt={d.title} loading="lazy"/>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{d.title}</h5>
          <span className="badge bg-light text-dark border">{d.category}</span>
        </div>
        <p className="card-text text-muted">{d.description}</p>
      </div>
    </motion.div>
  )
}
