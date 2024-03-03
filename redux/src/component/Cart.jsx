import React from 'react'
import { Link } from 'react-router-dom'


const Cart = ({cart,setcart}) => {
  return (
    <div>
<div className='container'>
{
 cart.length ===0 ?(
  <>
  <div className='text-center my-5 px-5' style={{
    marginRight:70
  }}>
    <h1>your cart is empty</h1>
    <Link to={'/'} className='btn btn-warning'>continue shopping...</Link>
  </div>
  </>
 ):(

  cart.map((item)=>{
return(
  <>
  
  <div className="card mb-3 my-5" style={{width:700}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imgSrc} className="img-fluid rounded-start" alt="..."/>
    
    </div>
    <div className="col-md-8">
      <div className="card-body my-5">
        <h5 className="card-title">{item.tittle}</h5>
        <p className="card-text">{item.description}</p>
        <button className='btn btn-primary mx-2'>{item.price}</button>
        <button className='btn btn-warning'>  Buy Now </button>
        
      </div>
    </div>
  </div>
</div>

  </>
)
  
  })
 )
}



</div>
<div className='btn-cont my-20 text-center' style={{
  marginBottom:30
}}>
<button className='btn btn-warning mx-3 my-7'> check out</button>
<button className='btn btn-danger my-7' onClick={()=>setcart('')}> clear cart </button>
</div>

    </div>
  )
}

export default Cart