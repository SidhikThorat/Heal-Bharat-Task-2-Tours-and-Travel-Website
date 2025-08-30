import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function ReviewCarousel({ reviews=[] }){
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      pagination={{ clickable:true }}
      autoplay={{ delay:3000 }}
      breakpoints={{640:{slidesPerView:2}, 992:{slidesPerView:3}}}
      aria-label="User reviews carousel"
    >
      {reviews.map(r => (
        <SwiperSlide key={r.id}>
          <div className="card h-100 card-hover">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3 mb-2">
                <img src={r.avatar} alt={r.name} width="44" height="44" className="rounded-circle" loading="lazy"/>
                <div>
                  <strong>{r.name}</strong>
                  <div className="text-warning">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                </div>
              </div>
              <p className="text-muted mb-0">{r.comment}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
