import React from 'react'

function Grid({ data }) {
    if (!data) {return (<div className="grid"> Loading icons</div>)}
    console.log('GRIDDY',data)
    return (
        <div className="grid">
            {data.map((critter) => {
                return <img src={critter["Icon Image"]} alt={critter["Name"]} className="critter-icon" />
            })}
        </div>
    )
}

export default Grid