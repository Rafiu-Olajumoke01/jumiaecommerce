import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { GiCookingPot } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { PiRadioLight } from "react-icons/pi";
import { IoDesktopSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { PiBaby } from "react-icons/pi";
import { CiApple } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { GiLipstick } from "react-icons/gi";
import "./Sidebar.css"

function Sidebar() {
    const [showComponent, setShowComponent] = useState(false);

    const handleMouseEnter = () => {
        setShowComponent(true)
    }

    const handleMouseLeave = () => {
        setShowComponent(false)
    }
    return (
        <div>
            <div className="sidebarComponents">
                <div className="sidebarComponent">
                    <div className='appliance'>
                        <Link>
                            <GiCookingPot size={20} />
                            <span className='m-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Appliances</span>
                        </Link>
                    </div>
                    {/* {showComponent && <Appliances />} */}
                    <div className='phonesAndTabs'>
                        <Link >
                            <MdPhoneIphone size={20} />
                            <span className='m-2'>Phones &amp; Tablets</span>
                        </Link>
                    </div>

                    <div className='healthAndBeauty'>
                        <Link>
                            <GiLipstick size={20} />
                            <span className='m-2'>Health &amp; Beauty</span>
                        </Link>
                    </div>

                    <div className='homeAndOffice'>
                        <Link >
                            <GoHome size={20} />
                            <span className='m-2'>Home &amp; Office</span>
                        </Link>
                    </div>

                    <div className='electronics'>
                        <Link >
                            <PiRadioLight size={20} />
                            <span className='m-2'>Electronics</span>
                        </Link>
                    </div>

                    <div className='fashion'>
                        <Link >
                            <GiClothes size={20} />
                            <span className='m-2'>Fashion</span>
                        </Link>
                    </div>

                    <div className='supermarket'>
                        <Link>
                            <CiApple size={20} />
                            <span className='m-2'>Supermarket</span>
                        </Link>
                    </div>

                    <div className='computing'>
                        <Link >
                            <IoDesktopSharp size={20} />
                            <span className='m-2'>Computing</span>
                        </Link>
                    </div>

                    <div className='baby products'>
                        <Link >
                            <PiBaby size={20} />
                            <span className='m-2'> Baby Products</span>
                        </Link>
                    </div>

                    <div className='gaming'>
                        <Link>
                            <IoGameControllerOutline size={20} />
                            <span className='m-2'>Gaming</span>
                        </Link>
                    </div>

                    <div className="musical_instruments">
                        <Link>
                            <span className=''>Musical Instruments</span>
                        </Link>
                    </div>

                    <div className="musical_instruments">
                        <Link>
                            <CiCircleMore />
                            <span className=''>Other categories</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar