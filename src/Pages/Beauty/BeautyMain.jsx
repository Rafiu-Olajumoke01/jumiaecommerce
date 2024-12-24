import React from 'react'
import { Link } from 'react-router-dom'
import { allproducts } from "./../ProductPage/Product"
import { useSelector, useDispatch } from 'react-redux'
import cartSlice from './../../store/cart/cartSlice'
import { addItemCart } from './../../store/cart/cartSlice'
import { removeItemCart } from './../../store/cart/cartSlice'
import './beauty.css'
function BeautyMain() {
  const beauty = allproducts.filter(product => product.category === 'Beauty')

  const cart = useSelector((state) => state.cart.cartItem)

  const dispatch = useDispatch()
  return (
    <div>
      <div className="beautyParent">
        <div className="beauty">
          <h5 className='beautyText'>Nivea</h5>
        </div>

        <div className="container-fluid Itemsdisplayed">
          <div className="row">
            {beauty.map(product => (
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
      </div>
    </div>
  )
}

export default BeautyMain
