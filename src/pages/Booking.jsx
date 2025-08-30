import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Booking(){
  const { state } = useLocation()
  const { register, handleSubmit, formState:{ errors, isSubmitSuccessful }, reset } = useForm({ mode:'onBlur' })
  
  const onSubmit = (data)=>{
    // emulate submit
    setTimeout(()=>{
      alert('Booking received! Check console for payload.')
      console.log('Booking payload:', data)
      reset()
    }, 300)
  }

  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-3" data-aos="fade-right">Book Your Tour</h2>
        <div className="row g-4">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit(onSubmit)} className="card p-3">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input className="form-control" {...register('name', { required:'Name is required', minLength:{ value:3, message:'Min 3 chars'} })} />
                  {errors.name && <div className="text-danger small">{errors.name.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" {...register('email', { required:'Email is required', pattern:{ value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:'Invalid email' } })} />
                  {errors.email && <div className="text-danger small">{errors.email.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Travel Date</label>
                  <input type="date" className="form-control" {...register('date', { required:'Select a travel date' })} />
                  {errors.date && <div className="text-danger small">{errors.date.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Package</label>
                  <select className="form-select" defaultValue={state?.packageId || ''} {...register('packageId', { required:'Choose a package' })}>
                    <option value="">Choose...</option>
                    {[1,2,3,4,5,6,7,8,9].map(id => <option key={id} value={id}>Package #{id}</option>)}
                  </select>
                  {errors.packageId && <div className="text-danger small">{errors.packageId.message}</div>}
                </div>
                <div className="col-12">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows="3" placeholder="Any special requests" {...register('notes')}></textarea>
                </div>
                <div className="col-12 d-flex gap-2">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-outline-secondary" onClick={()=>reset()}>Reset</button>
                </div>
              </div>
              {isSubmitSuccessful && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="alert alert-success mt-3">
                  🎉 Booking submitted! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>
          <div className="col-lg-5">
            <div className="card p-3 h-100">
              <h5>Why book with us?</h5>
              <ul className="mb-0">
                <li>Best price guarantee</li>
                <li>Handpicked experiences</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
