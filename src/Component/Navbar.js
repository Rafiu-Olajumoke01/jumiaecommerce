import React from 'react'
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import "./Navbar.css"

function SecondNav() {
    return (
        <div className=''>
            <div className="jumiaLogoParent ">
                <div className="jumiaLogo">
                    <img src={require("./../Images/Jumia-Logo3-removebg-preview.png")} alt="" />
                </div>

                <div className="search">
                    {/* <IoMdSearch size={20} className='search_icon position-absolute top-5 ms-1' /> */}
                    <input type="text" placeholder='Search Products, brands and categories' />
                    <button>SEARCH</button>
                </div>

                <div className="cartIcons">
                    <Link className="account" to={'/signup'}>
                        <CiUser size={30} fontWeight={50} />
                        <span>Account</span>
                    </Link>

                    <div className="help">
                        <LuHelpCircle size={30} fontWeight={50} />
                        <span>Help</span>
                    </div>

                    <Link className="cart" to={'/cart'}>
                        <MdOutlineShoppingCart size={30} fontWeight={50} className='addToCart' />
                        <span>Cart</span>
                    </Link>
                </div>
            </div>

            {/* <div className='smallScreenInp'>
                <input type="text" />
            </div> */}

        </div>
    )
}

export default SecondNav