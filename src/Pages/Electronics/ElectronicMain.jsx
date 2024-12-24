import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { allproducts } from "./../ProductPage/Product"
import cartSlice from './../../store/cart/cartSlice'
import { addItemCart } from './../../store/cart/cartSlice'
import { removeItemCart } from './../../store/cart/cartSlice'

import './electronic.css'


function ElectronicMain() {
  const electronic = allproducts.filter(product => product.category === 'Electronics')

  const cart = useSelector((state) => state.cart.cartItem)

  const dispatch = useDispatch()

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
                      <div className='btn btn-primary' onClick={() => dispatch(addItemCart(product))}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='cart_display'>
          <h5>Cart ({cart.length})</h5>
          {cart.map(item => (
            <div key={item.id}>
              <div>{item.name} - ${item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ElectronicMain
