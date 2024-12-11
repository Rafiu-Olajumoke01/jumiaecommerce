import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiDhl } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";

function FooterMain() {
  return (
    <div>
      <div className="container-fluid footMainParent">
        <div className="row mainsecond">
          <div className="col-md-3">
            <h5 className='fw-bold'>NEED HELP?</h5>
            <Link>Chat with us</Link>
            <Link>Help Center</Link>
            <Link>Contact Us</Link>
            <h5 className='fw-bold'>Useful Links</h5>
            <Link>Service Center</Link>
            <Link>How to shop on Jumia</Link>
            <Link>Delivery options and timelines</Link>
            <Link>How to return a product on Jumia</Link>
            <Link>Corporate and bulk Purchase</Link>
            <Link>Report a Product</Link>
            <Link>Dispute Resolution Policy</Link>
            <Link>Returns & Refund Timeline</Link>
            <Link>Return Policy</Link>
            <Link>Black Friday</Link>
          </div>

          <div className="col-md-3">
            <h5 className='fw-bold'>ABOUT JUMIA</h5>
            <Link>About us</Link>
            <Link>Jumia career</Link>
            <Link>Jumia Express</Link>
            <Link>Terms & conditions</Link>
            <Link>Privacy Notice</Link>
            <Link>Jumia store credit terms & conditions</Link>
            <Link>Jumia payment information guidelines</Link>
            <Link>Cookie notice</Link>
            <Link>Jumia Global</Link>
            <Link>Official stores</Link>
            <Link>Flash sales</Link>
          </div>

          <div className="col-md-3">
            <h5 className='fw-bold'>MAKE MONEY WITH JUMIA</h5>
            <Link>Sell on Jumia</Link>
            <Link>Vendor hub</Link>
            <Link>Become a Sales Consultant</Link>
            <Link>Join the Jumia KOL program</Link>
          </div>

          <div className="col-md-3">
            <h5 className='fw-bold'>JUMIA INTERNATIONAL</h5>
            <Link>Algeria</Link>
            <Link>Kenya</Link>
            <Link>Egypt</Link>
            <Link>Senegal</Link>
            <Link>Ivory Coast</Link>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="JoinUs">
                <h5>JOIN US ON</h5>
                <div className="socialMedia">
                  <Link to="#"><FaFacebookF size={20} /></Link>
                  <Link to="#"><FaYoutube size={20} /></Link>
                  <Link to="#"><FaXTwitter size={20} /></Link>
                  <Link to="#"><FaInstagram size={20} /></Link>
                  <Link to="#"><FaTiktok size={20} /></Link>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="paymentmethod">
                <h5>PAYMENT METHOD AND DELIVERY PARTNERS</h5>
                <div className="deliverypartners">
                  <Link to="#"><RiVisaLine size={30} /> </Link>
                  <Link to="#"><SiDhl size={40} /> </Link>
                  <Link to="#"><RiMastercardFill size={30} /> </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default FooterMain
