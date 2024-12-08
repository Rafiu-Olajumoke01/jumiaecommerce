import React from 'react'
import { Link } from 'react-router-dom'
import { allproducts } from "./../ProductPage/Product"
import './beverage.css'

function BeverageMain() {
  const beverage = allproducts.filter(product => product.category === 'Beverages')
  return (
    <div>
      <div className="beverageParent">
        <div className="beverage">
          <h5 className='beverageText'>Bacardi Martini Official Store</h5>
        </div>

        <div className="container-fluid Itemsdisplayed">
          <div className="row">
            {beverage.map(product => (
              <Link className="col-lg-2 itemBox" key={product.id}>
                <div className="card mt-3">
                  <img src={product.image} alt={product.name} className='img-fluid card-img-top' />
                  <div className="card-body product_item">
                    <div className='promo_details'>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text promo_price">Rs. {product.price}</p>
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

export default BeverageMain
