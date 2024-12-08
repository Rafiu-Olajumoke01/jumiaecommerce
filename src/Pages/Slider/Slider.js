import React from 'react'
import Slider from 'react-slick'
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImposeSlide() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className=''>
            <div className="imposeSliders">
                <Slider {...settings}>
                    <div>
                        <img src={require("./../../Images/holidaysales (2).jpg")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/SliderOne.gif")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/SliderTwo.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/SliderThree.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/SliderFour.jpg")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/SliderFive.gif")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/SliderSix.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("./../../Images/jumia1 (3) puzzle.gif")} alt="" />
                    </div>
                </Slider>
            </div>
        </div>

    )
}

export default ImposeSlide