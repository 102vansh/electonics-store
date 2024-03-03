import React, { useEffect, useState } from 'react'
import {Products} from '../data'
import Product from './Product'
import { useParams } from 'react-router-dom'
const Search = () => {
  const {term} = useParams()
  const[filterdata,setfilterdata] = useState([])

  useEffect(()=>{
    const filtereddata = () =>{
const data = Products.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
setfilterdata(data)
console.log(data)
    }
    filtereddata()
  },[term])
    
    
  return (
    <div>
      {term}
      <Product Products={filterdata}/>
    </div>
  )
}

export default Search