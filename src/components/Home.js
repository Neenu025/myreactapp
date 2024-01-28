import React from 'react'
import Child from './Child'
import homeCSS from "./Home.module.css"

const Home = () => {
  return (
    <div className=
    {homeCSS.header}>
        <h1 className='homeheader'>Home Component</h1>
        <Child />
        </div>
  )
}

export default Home