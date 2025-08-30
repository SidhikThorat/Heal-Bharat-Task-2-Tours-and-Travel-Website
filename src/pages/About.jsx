import React from 'react'

export default function About(){
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-3" data-aos="fade-right">About Us</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <p className="lead">We are a passionate team dedicated to crafting memorable travel experiences across India and beyond.</p>
            <p>Founded in 2015, we've served thousands of happy travelers with curated itineraries, reliable partners, and seamless support.</p>
          </div>
          <div className="col-md-6">
            <ul className="timeline list-unstyled m-0">
              <li data-aos="fade-up"><strong>2015:</strong> Company founded</li>
              <li data-aos="fade-up" data-aos-delay="100"><strong>2018:</strong> 10k bookings milestone</li>
              <li data-aos="fade-up" data-aos-delay="200"><strong>2022:</strong> Launched premium tours</li>
              <li data-aos="fade-up" data-aos-delay="300"><strong>2024:</strong> Expanded to 20+ countries</li>
            </ul>
          </div>
        </div>
        <div className="row g-3 mt-2">
          {[1,2,3,4].map(i=>(
            <div key={i} className="col-6 col-md-3">
              <div className="card text-center card-hover" data-aos="zoom-in">
                <img  className="card-img-top" alt="Team member"/>
                <div className="card-body">
                  <div className="fw-semibold">Team Member {i}</div>
                  <div className="text-muted small">Travel Expert</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
