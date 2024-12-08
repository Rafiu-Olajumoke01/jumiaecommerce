import React from 'react'
import { Link } from 'react-router-dom'
import { allproducts } from "./../ProductPage/Product"
import './homedeal.css'

function HomedealsMain() {
  const homedeal = allproducts.filter(product => product.category === 'Homedeal')
  return (
    <div>
       <div className="homedealParent">
        <div className="homedeal">
          <h5 className='homedealText'>Home Deals</h5>
        </div>

        <div className="container-fluid Itemsdisplayed">
          <div className="row">
            {homedeal.map(product => (
              <Link className="col-lg-2 itemBox" key={product.id}>
                <div className="card mt-3">
                  <img src={product.image} alt={product.name} className='img-fluid card-img-top dealImage' />
                  <div className="card-body product_item">
                    <div className='promo_details'>
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

export default HomedealsMain
