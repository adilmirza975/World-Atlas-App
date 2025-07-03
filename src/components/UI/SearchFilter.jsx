// the props we created in country.jsx for search filter ,we will use it here

export const SearchFilter = ({search, setSearch, filter, setFilter}) => {
  
  // user kya lihk rha hai, usko update krdo
  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  // user ne give option bar me jisko n=bhi select kiya, usko update krdo
  const handleSelectChange = (event) => {
    setFilter(event.target.value)
  }

  return (
  <section className="section-searchFilter container">

    <input type="text" placeholder="search"
    value={search}
    onChange={handleInputChange}
    />

    <div>
      <select className="select-section" value={filter} onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="India">India</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
      </select>
    </div>

  </section>
  )
}