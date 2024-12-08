import React from 'react'
import FirstNav from '../../Component/FirstNav'
import SecondNav from '../../Component/Navbar'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import Beauty from './../Beauty/Index'
import './cart.css'
function Cart() {
    // Your cart logic here, including state and methods to manage items, add, remove, and update quantities.

    return (
        <div>
            <div className='shoppingCart'>
                <FirstNav />
                <SecondNav />

                <div className="startShopping">
                    <div className='cartBox'>
                        <MdOutlineShoppingCart size={70} />
                    </div>
                    <p className='fw-bold'>Your cart is empty!</p>
                    <p>Browse our categories and discover our best deals!</p>

                    <div className='cartBtnParent'>
                        <Link className='cartBtn'>START SHOPPING</Link>
                    </div>
                </div>

                <Beauty/>

            </div>
        </div>
    )
}

export default Cart
