import React from 'react'
import { allproducts } from "./ProductPage/Product"

function Test() {
    const electronicProducts = allproducts.filter(product => product.category === 'Home')
    // console.log(electronicProducts)

    return (
        <div>
            <h1>Electronics Category</h1>

            <div className="container-fluid">
                <div className="row">
                {electronicProducts.map(product => (
                        <div key={product.id} className="col-md-2">
                            <div className="card">
                                <img src={product.image} alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    )
}

export default Test
