import React from 'react'
import "./FirstNav.css"

function FirstNav() {
    return (
        <div>
            <div className="jumiapayParent">
                <div className="jumiapay">
                    <div className="sellOnJumia">
                        <img src={require("./../Images/jumialogome.png")} alt="" />
                        <h6 className='mt-2'>Sell on Jumia</h6>
                    </div>

                    <div className="pay">
                        <img src={require("./../Images/jumiapay-removebg-preview.png")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstNav