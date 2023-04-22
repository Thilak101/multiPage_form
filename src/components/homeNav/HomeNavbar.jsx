import React from 'react'
import "./homeNavbar.css"

const HomeNavbar = () => {
    return (
        <>
            <div className="container">

                <div className="service">
                    <div className="headSetIcon">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <div className="setpAndService">
                        <h5>step 1/6</h5>
                        <h4>Type of Service</h4>
                    </div>
                </div>
                <div className="icons">
                <hr />

                    <div className="contactIcon iconClass">
                        <i class="fa-regular fa-id-badge"></i>
                    </div>
                    <hr />
                    <div className="featherPen iconClass">
                        <i class="fa-solid fa-feather-pointed"></i>
                    </div>
                    <hr />
                    <div className="penNib iconClass">
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <hr />
                    <div className="tag iconClass">
                        <i class="fa-solid fa-tag"></i>
                    </div>
                    <hr />
                    <div className="message iconClass">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNavbar