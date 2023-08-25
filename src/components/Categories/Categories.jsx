import React from 'react'

function Categories({ setCategory }) {
    const handleRadio = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    }
    return (
        <form className='categories' onChange={handleRadio}>
            <input type="radio" name="category" id="all" value="all" defaultChecked />
            <label htmlFor="all">All</label> <br />
            <input type="radio" name="category" id="fish" value="fish" />
            <label htmlFor="fish">Fish</label> <br />
            <input type="radio" name="category" id="insects" value="insects" />
            <label htmlFor="insects">Insects</label> <br />
            <input type="radio" name="category" id="sea-creatures" value="sea-creatures" />
            <label htmlFor="sea-creatures">Sea Creatures</label> <br />
        </form>
    )
}

export default Categories