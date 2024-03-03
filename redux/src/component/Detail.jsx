import React, { useEffect, useState } from 'react'
import { Products } from '../data'
import { useParams } from 'react-router-dom'
const Detail = () => {
  const {id} = useParams()
  const[product,setproduct] = useState({})
  useEffect(()=>{
const filterpro = Products.filter((item)=> item.id == id)
setproduct(filterpro[0])
  },[id])

  return (
    <div>
      <div className='detail'>
      <div className='image'>
        <img src={product.imgSrc} ></img>
        </div>
        <div className='pro'>
        <h1 className="card-title">{product.tittle}</h1>
    <p className="card-text">{product.description}</p>
    <button className='btn btn-primary mx-2'>{product.price}</button>
    <button className='btn btn-warning'>Add to cart</button>
    
        </div>
      </div>
    </div>
  )
}

export default Detail