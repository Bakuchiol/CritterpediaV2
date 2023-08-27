import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/app_context'
import './critter.css'

const Critter = () => {

  const { getData } = useContext( AppContext )

  // NEED STATE that follows currentCritter... this will be set in gallery(?) and passed to Critter via context
  const [ currentCritter, setCurrentCritter ] = useState()
  
  // NEED STATE that holds array of all critters (for prev and next)
  const [ allCritters, setAllCritters ] = useState()

  // NEED STATE to hold likedCritters
  const [ likedCritters, setLikedCritters ] = useState(['']) // setter function gets "not iterable error" without ""

  
  useEffect(() => {
    getData('all').then( data => {
      setCurrentCritter( data[0] )
      setAllCritters( data )
    })
  }, []) // for testing purposes
  
  console.log( currentCritter )
  console.log( allCritters )
  
  // to hold previous and next critter indicies
  let previous, next
  
  const setPreviousAndNext = () => {
    // need index of current
    const currentCritterIndex = allCritters?.indexOf( currentCritter )
    console.log( 'CURRENT CRITTER INDEX', currentCritterIndex)
    
    // account for current being first or last index
    if( currentCritterIndex === 0 ){
      previous = allCritters?.length - 1
      next = currentCritterIndex + 1
    } else if ( currentCritterIndex === allCritters?.length - 1 ){
      previous = currentCritterIndex -1
      next = 0
    } else {
      previous = currentCritterIndex -1
      next = currentCritterIndex + 1
    }
    console.log(previous, next)
  }
  setPreviousAndNext()
  
  
  // for critter names, though i like the look of all lowercase
  const formatWords = ( words ) => {
    if( !words ) return
    let formatted = []
    words.split(' ').map(( word ) => {
      let firstLetter = word.split('').shift().toUpperCase()
      formatted.push(firstLetter + word.substring(1))
    })
    return formatted.join(' ') // words with each first letter capital
  }
  console.log( formatWords('this is a test'))

  // for handling arrow clicks
  const switchCurrentCritter = ( index ) => {
    setCurrentCritter( allCritters[index] )
  }

  const addToLiked = ( who ) => {
    // prevent duplicates doesnt exactly work lol
    if( isLiked( who ) ){
      console.log('Already Liked')
    } else {
      setLikedCritters( [...likedCritters, who] )
    }
    console.log( 'Current Liked', likedCritters )
  }

  const isLiked = ( who ) => {
    return likedCritters.includes( who )
  }


  return (
    // temporary to fix annoying cant read props of undefined errors
    currentCritter && 
    <main>
      {/* <p>critter page</p> */}
      <header>
        <div className="left">
          <p className='arrow hover' onClick={() => switchCurrentCritter(previous)}>⬅️</p>
          <p>{ previous + 1 }. { formatWords( allCritters[previous]?.Name ) }</p>
          <img src={ allCritters[previous]["Icon Image"] } alt="mini icon" className='mini'/>
       </div>

        {/* <div className="middle"></div> */}

        <div className="right">
          <img src={ allCritters[next]["Icon Image"] } alt="mini icon" className='mini'/>
          <p>{ next + 1 }. { formatWords( allCritters[next]?.Name ) }</p>
          <p className='arrow hover' onClick={() => switchCurrentCritter(next)}>➡️</p>
        </div>
      </header>

      <div className="titleContainer">
        <h3 className='name'>{ formatWords( currentCritter?.Name ) }</h3>
        <p className='like hover' 
        onClick={() => addToLiked( currentCritter )}
        >
          {String(isLiked(currentCritter))}
          { isLiked(currentCritter) ? '❤️' : '🤍' }
        </p> {/* for adding to liked gallery */}
      </div>

      <p className="catchPhrase">"{currentCritter["Catch phrase"]}"</p>

      <img src={currentCritter["Critterpedia Image"]} alt={currentCritter?.Name} />

      <div className="information">
        <p className='description'>{ currentCritter.Description }</p>

        <div className="details">
          <p>
            <span className="bold">Total Catches To Unlock: </span>
            <span>{ currentCritter["Total Catches to Unlock"] }</span>
          </p>
          <p>
            <span className="bold">Lighting Type: </span>
            <span>{ currentCritter["Lighting Type"] }</span>
          </p>
          <p>
            <span className="bold">Movement Speed: </span>
            <span>{ currentCritter["Movement Speed"] }</span>
          </p>
          <p>
            <span className="bold">Sell: </span>
            <span>{ currentCritter.Sell }</span>
          </p>
        </div>

      </div>
      
    </main>
  )
}

export default Critter
