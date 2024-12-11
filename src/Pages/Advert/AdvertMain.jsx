import React from 'react'
import {  allproducts } from "./../ProductPage/Product"
import "./Advert.css"


function AdvertMain() {
  const Advert = allproducts.filter(product => product.category === 'Advert')
  
  
  return (
    <div className='product'>
      <div className="container-fluid parent">
      <div className="row">
          {Advert.map(product => (
            <div key={product.id} className="col-md-2">
                <img src={product.image} alt={product.name} className='img-fluid'/>
                <div className="card-body">
                  <p className="card-title">{product.name}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvertMain
