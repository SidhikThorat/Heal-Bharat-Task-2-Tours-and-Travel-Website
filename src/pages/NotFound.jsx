import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h1 className="display-5">404</h1>
        <p className="lead">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </div>
    </section>
  )
}
