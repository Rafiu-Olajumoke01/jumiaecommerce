import React from 'react'
import './Allprops.css'

function Allprops({headingText}) {
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

export default Allprops
