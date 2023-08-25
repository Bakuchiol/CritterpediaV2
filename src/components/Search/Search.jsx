import React, { useState } from 'react'

function Search({setSearchTerm, getData, category}) {
    const [searchQuery, setSearchQuery] = useState("")
    const handleChange = async (e) => {
        await getData(category)
        setSearchQuery(e.target.value)
        setSearchTerm(searchQuery)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(searchQuery)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" onChange={handleChange}  />
        <input type="submit" value="search" />
    </form>
  )
}

export default Search