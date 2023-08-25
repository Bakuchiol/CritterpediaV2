import React, { useState } from 'react'

function Search({setSearchTerm}) {
    const [searchQuery, setSearchQuery] = useState("")
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        setSearchTerm(searchQuery)
    }
  return (
    <form>
        <input type="text" name="search" id="search" onChange={handleChange} onSubmit={handleSubmit} />
        <input type="submit" value="search" />
    </form>
  )
}

export default Search