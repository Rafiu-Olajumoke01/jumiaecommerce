import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'


function Signup() {
    return (
        <div>
            <div>
                <h3>Welcome to Jumia</h3>
                <p>Type your e-mail or phone number to log in or create a Jumia account.</p>
                <div>
                    <input type="text" placeholder='Email or Mobile Number*' />

                </div>

                <div className="continue">
                    <Link>Continue</Link>
                    <p>By continuing you agree to Jumia’s</p>
                    <Link>By continuing you agree to Jumia’s</Link>
                </div>
             
                <div className="facebook">
                    <img src="facebook.png" alt="Facebook" />
                    <Link>Sign in with Facebook</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
