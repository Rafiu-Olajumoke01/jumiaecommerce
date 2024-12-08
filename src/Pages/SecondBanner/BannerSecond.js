import React from 'react'
import Image1 from './../../Images/BannerNew.png'
import Image2 from './../../Images/BannerNew2.jpg'
import Image3 from './../../Images/BannerNew3.jpg'
import Image4 from './../../Images/BannerNew4.png'
import "./secondBanner.css"

function BannerSecond() {
    return (
        <div>
            <div className="NewBanner">
                <div className="firstBanner">
                    <img src={Image1} alt="Banner 1" />
                    <img src={Image2} alt="Banner 2" />
                </div>

                <div className="secondBanner">
                    <img src={Image3} alt="Banner 3" />
                    <img src={Image4} alt="Banner 4" />
                </div>
            </div>
        </div>
    )
}

export default BannerSecond
