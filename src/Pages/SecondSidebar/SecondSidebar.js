import React from 'react'
import { Link } from 'react-router-dom';
import "./secondsidebar.css"

function ads() {
    return (
        <div>
            <div className="advertisement">
                <div className="Call">
                    <Link className="callToOrder">
                        <img src={require("./../../Images/jumia call.png")} alt="" />
                        <h6>CALL TO ORDER</h6>
                    </Link>

                    <Link className="sellOnJumia">
                        <img src={require("./../../Images/jumia home.png")} alt="" />
                        <h6>Sell On Jumia</h6>
                    </Link>

                    <Link className="bestDeals">
                        <img src={require("./../../Images/jumia order.png")} alt="" />
                        <h6>Best Deals</h6>
                    </Link>
                </div>

                <div className="twoDaysLeft">
                    <img src={require("./../../Images/callToOrder.gif")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ads