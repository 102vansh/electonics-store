import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Detail  from './component/Detail'
import Cart from './component/Cart'
import Search  from './component/Search'
// import Product from './Product'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Products } from './data'

const App = () => {
  const[data,setdata] = useState([...Products])
  const[cart,setcart] = useState([])
  console.log(cart)
  return (
    <div>
    

       
       <Router>
       <Navbar setdata ={setdata} cart={cart}/>
        <Routes>
          <Route path='/' element={<Product Products={data} cart={cart} setcart={setcart}/>}/>
          <Route path='/product/:id' element={ <Detail/>}></Route>
          <Route path='/search/:term' element={ <Search/>}></Route>
          <Route path='/cart' element={ <Cart cart={cart} setcart={setcart}/>}></Route>
        </Routes>
      </Router>
      
     
    </div>
  )
}

export default App