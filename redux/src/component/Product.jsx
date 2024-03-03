import React from 'react'
import{Products} from '../data'
import {ToastContainer,toast} from 'react-toastify'
import { Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
const Product = ({cart,setcart,Products}) => {

  const addtocart = (id,price,tittle,description,imgSrc) =>{
    const obj ={
      id,price,tittle,description,imgSrc
    }
    setcart([...cart,obj])
    console.log(cart)
    toast.success('item added to cart', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  return (

    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"


/>
    
    <div className='container'>
    <div className='row'>
        {
            Products.map((item)=>{
                return(
                    <>
                    
                    <div className='col-lg-4 my-3 text-center'>
                    <div className="card" style={{width:'18rem'}}>
                    <Link  to={`/product/${item.id}`} style={{
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center'
                    }}>
  <img src={item.imgSrc} className="card-img-top" alt="..."/>
  </Link>
  <div className="card-body">
    <h5 className="card-title">{item.tittle}</h5>
    <p className="card-text">{item.description}</p>
    <button className='btn btn-primary mx-2'>{item.price}</button>
    <button className='btn btn-warning' onClick={()=>addtocart(item.id,item.price,item.tittle,item.description,item.imgSrc)} >Add to cart</button>
    
  </div>
</div>
</div>
                    </>
                )
            })
        }
        </div>
        </div>
    </>
  )
}

export default Product