import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import DestinationCard from '../components/DestinationCard'
import FilterBar from '../components/FilterBar'

export default function Destinations(){
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  useEffect(()=>{ axios.get('/src/data/destinations.json').then(res => setList(res.data)) },[])
  const categories = useMemo(()=> Array.from(new Set(list.map(d=>d.category))), [list])

  const filtered = useMemo(()=>{
    return list.filter(d => 
      (!category || d.category === category) && 
      (d.title.toLowerCase().includes(search.toLowerCase()) || d.description.toLowerCase().includes(search.toLowerCase()))
    )
  }, [list, search, category])

  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-3" data-aos="fade-right">Destinations</h2>
        <FilterBar search={search} setSearch={setSearch} category={category} setCategory={setCategory} sort={''} setSort={()=>{}} categories={categories} />
        <div className="row g-3">
          {filtered.map(d => (
            <div key={d.id} className="col-12 col-sm-6 col-lg-4">
              <DestinationCard d={d}/>
            </div>
          ))}
        </div>

        <div className="mt-4 map-grid">
          <div className="map-box">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" alt="Map placeholder" className="w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
