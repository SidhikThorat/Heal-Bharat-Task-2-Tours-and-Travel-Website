import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import PackageCard from '../components/PackageCard'
import FilterBar from '../components/FilterBar'

function parseDuration(d){
  // e.g., "5D/4N" -> 5
  const m = /([0-9]+)D/i.exec(d || '')
  return m ? parseInt(m[1],10) : 0
}

export default function Packages(){
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  useEffect(()=>{ axios.get('/src/data/packages.json').then(res => setList(res.data)) },[])
  const categories = useMemo(()=> Array.from(new Set(list.map(p=>p.category))), [list])

  const filtered = useMemo(()=>{
    let r = list.filter(p =>
      (!category || p.category === category) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
    )
    switch(sort){
      case 'priceAsc': r = r.sort((a,b)=> a.price - b.price); break;
      case 'priceDesc': r = r.sort((a,b)=> b.price - a.price); break;
      case 'durationAsc': r = r.sort((a,b)=> parseDuration(a.duration) - parseDuration(b.duration)); break;
      case 'durationDesc': r = r.sort((a,b)=> parseDuration(b.duration) - parseDuration(a.duration)); break;
      case 'popularity': r = r.sort((a,b)=> (b.popularity||0) - (a.popularity||0)); break;
      default: break;
    }
    return r
  }, [list, search, category, sort])

  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-3" data-aos="fade-right">Tour Packages</h2>
        <FilterBar search={search} setSearch={setSearch} category={category} setCategory={setCategory} sort={sort} setSort={setSort} categories={categories} />
        <div className="row g-3">
          {filtered.map(p => (
            <div key={p.id} className="col-12 col-sm-6 col-lg-4">
              <PackageCard p={p}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
