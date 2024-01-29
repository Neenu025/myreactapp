import React from 'react'
import { Button } from 'react-bootstrap'

const products =[{id:1, name:"Laptop", Brand:"Dell",Quantity: 1},
                 {id:2, name:"Laptop", Brand:"HP",Quantity: 1},
                 {id:3, name:"Laptop", Brand:"Lenovo",Quantity: 1}]

const Keys = () => {
  return (
    <div>
        {products.map((product)=>(
        <div className='bg-success text-white m-2'key={product.id}>
            <h1>{product.name}</h1>
            <h3>Brand: {product.Brand}</h3>
            <h4>Quantity: {product.Quantity}</h4>
            <Button type='button'>+</Button>
            </div>
        ))}
        
    </div>
  )
}

export default Keys