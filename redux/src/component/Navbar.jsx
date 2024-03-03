import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Products } from '../data'
import Cart from './Cart'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({setdata,cart}) => {
    const[search,setsearch] = useState('')
    const navigate = useNavigate()
    const filtercategory = (category) =>{
        const element = Products.filter((product)=>product.category === category)
        setdata(element)
        console.log(element)
        
    }
    const filterprice = (price) =>{
        const element = Products.filter((item)=>item.price>=price)
        console.log(element)
        setdata(element)
    }
    const handlechange = ()=>{
        e.preventDefault()
        setsearch("")
        navigate(`/search/${search}`)
    }
  return (
    <div>
        <header>
            <div className='navbar'>
             <Link to={'/'}> <div className='logo'>Ecomerse</div></Link>
                <form className='search' onSubmit={handlechange}><input type='text' placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)}></input></form>
                <Link to={'/cart'}><div className='cart'>
                <button type="button" class="btn btn-primary position-relative">
                <FaShoppingCart />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
                </div></Link>
            </div>
            <div className='wrapper'>
            <div className='items'>filter by{"->"}</div>
            <div className='items' onClick={()=>filtercategory('mobiles')}>mobile</div>
            <div className='items'  onClick={()=>filtercategory('laptops')}>laptop</div>
            <div className='items' onClick={()=>filtercategory('tablets')}>tablets</div>
            <div className='items' onClick={()=>filterprice(29000)}>{">="}29000</div>
            <div className='items'  onClick={()=>filterprice(49000)}>{">="}49000</div>
            <div className='items' onClick={()=>filterprice(69000)}>{">="}69000</div>
            <div className='items'  onClick={()=>filterprice(89000)}>{">="}89000</div>
            </div>
        </header>
    </div>
  )
}

export default Navbar