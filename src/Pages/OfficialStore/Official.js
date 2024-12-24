import React from 'react'
import { allproducts } from "./../ProductPage/Product"
import { Link } from 'react-router-dom'
import "./official.css"
import { useSelector, useDispatch } from 'react-redux'
import cartSlice from './../../store/cart/cartSlice'
import { addItemCart } from './../../store/cart/cartSlice'
import { removeItemCart } from './../../store/cart/cartSlice'

function Mobilemain() {
  const officialstore = allproducts.filter(product => product.category === 'OfficialStore')

  const cart = useSelector((state) => state.cart.cartItem)

  const dispatch = useDispatch()
  return (
    <div>
      <div className="officialParent">
        <div className="official">
          <h5 className='officialText'>Official Store</h5>
        </div>

        <div className="container-fluid Itemsdisplayed">
          <div className="row">
            {officialstore.map(product => (
              <Link className="col-lg-2 itemBox" key={product.id}>
                <div className="card mt-3">
                  <img src={product.image} alt={product.name} className='img-fluid card-img-top officialImg' />
                  <div className="card-body product_item">
                    <div className='promo_details'>
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

export default Mobilemain
