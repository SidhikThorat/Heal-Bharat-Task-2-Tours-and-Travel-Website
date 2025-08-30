import React from 'react'

export default function FilterBar({ search, setSearch, category, setCategory, sort, setSort, categories=[] }){
  return (
    <div className="row g-2 align-items-center mb-3">
      <div className="col-12 col-md-4">
        <input aria-label="Search" className="form-control" placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
      <div className="col-6 col-md-4">
        <select aria-label="Category" className="form-select" value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="col-6 col-md-4">
        <select aria-label="Sort" className="form-select" value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="durationAsc">Duration: Short to Long</option>
          <option value="durationDesc">Duration: Long to Short</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  )
}
