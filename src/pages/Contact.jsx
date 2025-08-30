import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

export default function Contact(){
  const { register, handleSubmit, formState:{ errors, isSubmitting, isSubmitSuccessful }, reset } = useForm()

  const onSubmit = async (data)=>{
    await new Promise(r => setTimeout(r, 600))
    console.log('Contact message:', data)
    reset()
  }

  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-3" data-aos="fade-right">Contact Us</h2>
        <div className="row g-4">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit(onSubmit)} className="card p-3">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input className="form-control" {...register('name',{ required:'Required'})} />
                  {errors.name && <div className="text-danger small">{errors.name.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" {...register('email',{ required:'Required'})} />
                  {errors.email && <div className="text-danger small">{errors.email.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Inquiry Type</label>
                  <select className="form-select" {...register('type',{ required:'Required'})}>
                    <option value="">Choose...</option>
                    <option>General</option>
                    <option>Booking</option>
                    <option>Support</option>
                  </select>
                  {errors.type && <div className="text-danger small">{errors.type.message}</div>}
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" {...register('message',{ required:'Required', minLength:{ value:10, message:'Min 10 chars'} })}></textarea>
                  {errors.message && <div className="text-danger small">{errors.message.message}</div>}
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
              {isSubmitSuccessful && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="alert alert-success mt-3">
                  ✅ Message sent! We'll reply soon.
                </motion.div>
              )}
            </form>
          </div>
          <div className="col-lg-5">
            <div className="card p-3 h-100">
              <h5>Contact Details</h5>
              <p className="mb-1">📞 +91 98765 43210</p>
              <p className="mb-1">✉️ hello@travelexplorer.com</p>
              <p className="mb-0">🏢 Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
