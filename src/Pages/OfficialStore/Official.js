import React from 'react'
import { allproducts } from "./../ProductPage/Product"
import { Link } from 'react-router-dom'
import "./official.css"

function Mobilemain() {
  const officialstore = allproducts.filter(product => product.category === 'OfficialStore')


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
