import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allproducts } from "./../ProductPage/Product"
import './electronic.css'


function ElectronicMain() {
  const electronic = allproducts.filter(product => product.category === 'Electronics')
  // const [cart, setCart] = useState([])

  // const removeFromCart = (itemId) => {
  //   const updatedCart = cart.filter(item => item.id !== itemId);
  //   setCart(updatedCart);
  // }
  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  //   console.log('Added to cart:', item);
  // }


  return (
    <div>
      <div className="electronicParent">
        <div className="electronic">
          <h5 className='electronicText'>Electronics</h5>
        </div>

        <div className="container-fluid Itemsdisplayed">
          <div className="row">
            {electronic.map(product => (
              <Link className="col-lg-2 itemBox" key={product.id}>
                <div className="card mt-3">
                  <img src={product.image} alt={product.name} className='img-fluid card-img-top' />
                  <div className="card-body product_item">
                    <div className='promo_details'>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text promo_price">{product.price}</p>
                      <Link className='previousSale'>{product.previousSale}</Link>
                      <Link className='btn btn-primary'>Add to Cart</Link>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectronicMain
