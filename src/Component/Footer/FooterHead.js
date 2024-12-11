import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function FooterHead() {
    return (
        <div>
            <div className="container-fluid Footparent">
                <div className="row Footsecondparent">
                    <div className="col-md-3 jumiaImage">
                        <img src={require('./../../Images/jumiaFooter.png')} alt="" />
                    </div>

                    <div className="col-md-6 Newsletter">
                        <h3>New to Jumia?</h3>
                        <p>Subscribe to our newsletter to get updates on our latest offers!</p>

                        <div className='NewsletterChild'>

                            <input type="text" placeholder="Enter your email" />
                            <div className='Gender'>
                                <Link>MALE</Link>
                                <Link>FEMALE</Link>
                            </div>

                        </div>

                        <div className='termsAndconditions'>
                            <input type="checkbox" name="" id="" />
                            <p>I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</p>
                            <Link>I accept the Legal Terms</Link>
                        </div>
                    </div>

                    <div className="col-md-3 downloadingApp">
                        <div className="downloadJumia">
                            {/* <img src={require('./../../Images/jumialogome.png')} alt="" /> */}
                            <div>
                                <h6>DOWNLOAD JUMIA FREE APP</h6>
                                <p>Get access to exclusive offers!</p>
                            </div>
                        </div>
                        <div className="downloadlink">
                            <Link>Download On AppStore</Link>
                            <Link>Download On GooglePlay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterHead
