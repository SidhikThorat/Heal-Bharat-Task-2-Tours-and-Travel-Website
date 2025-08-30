import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import PackageCard from '../components/PackageCard'
import ReviewCarousel from '../components/ReviewCarousel'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home(){
  const [destinations, setDestinations] = useState([])
  const [packages, setPackages] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    axios.get('/src/data/destinations.json').then(res => setDestinations(res.data.slice(0,6)))
    axios.get('/src/data/packages.json').then(res => setPackages(res.data.slice(0,6)))
    axios.get('/src/data/reviews.json').then(res => setReviews(res.data))
  },[])

  return (
    <div>
      <Hero />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h3 className="m-0">Featured Destinations</h3>
            <Link to="/destinations" className="btn btn-link">View all</Link>
          </div>
          <div className="row g-3">
            {destinations.map(d => (
              <div key={d.id} className="col-12 col-sm-6 col-lg-4">
                <DestinationCard d={d}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h3 className="m-0">Popular Packages</h3>
            <Link to="/packages" className="btn btn-link">View all</Link>
          </div>
          <div className="row g-3">
            {packages.map(p => (
              <div key={p.id} className="col-12 col-sm-6 col-lg-4">
                <PackageCard p={p}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="mb-3">What travelers say</h3>
          <ReviewCarousel reviews={reviews} />
        </div>
      </section>
    </div>
  )
}
