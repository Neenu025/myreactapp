import React,{useState} from 'react';
// import React from 'react'
import headerCSS from "./Header.module.css"
import {Button,Table, Accordion, Card, Navbar,Nav, Container} from 'react-bootstrap';




const Header = () => {
  const [color,setColor] = useState("Violet")
  const [count, setCount] = useState(0)

  const changeColor = () =>{
    setColor("Blue")
  }
  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    setCount(count - 1)
  }
  
    
  return (
      
      <>
      <h1 className='bg-success text-white'>Learn React Hooks</h1> 
      <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Change color</button>

      <h1>Counter is {count}</h1>
      <button className='m-2 bg-success' onClick={increment}>+</button>
      <button className = "m-2 bg-danger" onClick={decrement}>-</button>

      


    </>
    
  )
}

export default Header