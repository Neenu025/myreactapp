import React from 'react'

const States = ({statesIn}) => {   //pass the name of the array from APP.js

  return (

    <div>
    {statesIn.map((state)=>(

        <div className='bg-warning'>
        <h1>{state.name}</h1>
        <h3>Language: {state.language}</h3>
        <h4>Population: {state.population}</h4>
        </div>
    ))}
    </div>
  )
}

export default States