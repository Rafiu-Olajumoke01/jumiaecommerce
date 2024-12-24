import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import './Signup.css'


function Signup() {
    return (
        <div>
            <div className='signing'>
                <div className="image">
                    <img src={require('./../../Images/myjumia-top-logo.png')} alt="" />
                </div>

                <h4 className='fw-bold'>Welcome to Jumia</h4>
                <p>Type your e-mail or phone number to log in or create a Jumia account.</p>
                <div className='form-inp'>
                    <input type="text" placeholder='Email or Mobile Number*' />

                    <button className='login-btn'>Continue</button>
                </div>

                <h6>By continuing you agree to Jumia's</h6>

                <Link className='termsandconditions'>Terms and Conditions</Link>


                <Link className="facebook">
                    <FaFacebookF />
                    <p className='fb'>Sign in with Facebook</p>
                </Link>

                <div className="customer_service">
                    <p className='customercare'>For further support, you may visit the Help Center .</p>
                </div>

                <div className="footImage">
                    <img src={require('./../../Images/myjumia-bottom-logo.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Signup
