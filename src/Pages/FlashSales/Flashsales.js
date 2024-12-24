import React from 'react'
import { allproducts } from "./../ProductPage/Product"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./Flashsales.css"
import cartSlice from './../../store/cart/cartSlice'
import { addItemCart } from './../../store/cart/cartSlice'
import { removeItemCart } from './../../store/cart/cartSlice'


function Flashsales() {
    const flashsale = allproducts.filter(product => product.category === 'Flashsales')
    const cart = useSelector((state) => state.cart.cartItem)

    const dispatch = useDispatch()

    return (
        <div>
            <div className="flashParent">
                <div className="flash">
                    <div className="flashtext">
                        <h4>Flash Sale</h4>
                    </div>

                    <div className="counter">
                        <h4>Time Left: 10h : 40m : 20s</h4>
                    </div>

                    <div className="seeAll">
                        <p>SEE ALL</p>
                    </div>
                </div>

                <div className="container-fluid Itemsdisplayed">
                    <div className="row">
                        {flashsale.map(product => (
                            <Link className="col-lg-2  itemBox" key={product.id}>
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

export default Flashsales
