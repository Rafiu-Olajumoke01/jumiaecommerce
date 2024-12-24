import React from 'react'
import FirstNav from '../../Component/FirstNav'
import SecondNav from '../../Component/Navbar'
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cartSlice from './../../store/cart/cartSlice'
import { addItemCart } from './../../store/cart/cartSlice'
import { removeItemCart } from './../../store/cart/cartSlice'
import { clearCart } from './../../store/cart/cartSlice'
import { updateQuantityCart } from './../../store/cart/cartSlice'
import { checkoutCart } from './../../store/cart/cartSlice'
import { decrementQuantity } from './../../store/cart/cartSlice'
import { incrementQuantity } from './../../store/cart/cartSlice'
import { applyCouponCode } from './../../store/cart/cartSlice'
import { removeCouponCode } from './../../store/cart/cartSlice'
import { applyDiscount } from './../../store/cart/cartSlice'
import { IoIosClose } from "react-icons/io";
import './cart.css';

function Cart() {
    // Your cart logic here, including state and methods to manage items, add, remove, and update quantities.
    // const { cartItems } = useSelector(cartSlice.selectors.selectAllCartItems)
    // const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const cart = useSelector((state) => state.cart.cartItem)

    const dispatch = useDispatch()

    return (
        <div>
            <div className='shoppingCart'>
                <FirstNav />
                <SecondNav />

                <div className="startShopping">
                    <div className='cartBox'>
                        <MdOutlineShoppingCart size={70} />
                    </div>
                    <p className='fw-bold text-align-center'>
                        <span>Your Cart</span>
                        <span>({cart.length} items)</span>
                    </p>

                    <p className='text-align-center'>Browse our categories and discover our best deals!</p>

                    <div className='cartBtnParent'>
                        <Link className='cartBtn' to={'/'}>START SHOPPING</Link>
                    </div>
                </div>

                <h2>Shopping Cart</h2>
                {
                    cart.map(item => (
                        <div key={item.id} className='cartItem'>
                            <div className="imageAndCart">
                                <div className='cartItemImage'>
                                    <img src={item.image} alt={item.title} />

                                    <button onClick={() => dispatch(removeItemCart(item.id))} className='removebtn'>
                                        <RiDeleteBin7Line />
                                        <p>Remove</p>
                                    </button>
                                </div>

                                <div className="descriptionText mt-2">
                                    <h5 class="card-name">{item.name}</h5>

                                    <p class="card-description">Description: {item.description}</p>
                                </div>

                                <div class="">
                                    <p class="card-text">Price: #{item.price}</p>

                                    <div className='cartItemQuantity'>

                                        <button onClick={() => dispatch(decrementQuantity(item.id))} className='decreasebtn'>-</button>


                                        <input type='number' value={item.quantity} readOnly className='inputValue' />


                                        <button onClick={() => dispatch(incrementQuantity(item.id))} className='increasebtn'>+</button>

                                    </div>

                                    <div className='cartItemTotal'>
                                        <p>Total: #{item.price * item.quantity}</p>
                                        <p>Shipping: #5.00</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>

                            <div className="cartSummary">
                                <p>CART SUMMARY</p>
                                <hr />
                                <p>Subtotal: #{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                                <p>Delievry fee not included.</p>
                                <hr />
                                <button onClick={() => dispatch(checkoutCart())}>Checkout #{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</button>
                            </div>
                        </div>

                    ))

                }


            </div>
        </div>
    )
}

export default Cart
