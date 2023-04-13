import React from 'react'
import {Link,Outlet} from "react-router-dom"
const Products = () => {
  return (
    <>
      <div className='productpage'>
        <div className='productcontainer'>
        <div className='leftpannel'>
          <Link to='electronices'>electronices</Link>
          <Link to='jewellery'>jewellery</Link>
          <Link to='mensclothing'>mensclothing</Link>
          <Link to='womensclothing'>womensclothing</Link>
        </div>
        
        <div className='rightpannel'>
          <Outlet/>
        </div>

        </div>
      </div>
    </>
  )
}

export default Products
