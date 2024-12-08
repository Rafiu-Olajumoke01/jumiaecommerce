import React from 'react'
import { allproducts } from "./../ProductPage/Product"
import { Link } from 'react-router-dom'
import "./mobile.css"

function Mobilemain() {
  const mobilephone = allproducts.filter(product => product.category === 'Mobile Phones')


  return (
    <div>
      <div className="mobileParent">
        <div className="mobile">
          <h5 className='mobileText'>Limited Stock Deal</h5>
        </div>

        <div className="container-fluid Itemsdisplayed">
          <div className="row">
            {mobilephone.map(product => (
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

export default Mobilemain
