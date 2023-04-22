import React from 'react'
import "./detailsNav.css"

const DetailsNav = () => {
    
    return (
        <div className='detailsNav'>
            <div className="container">

                <div className="service">
                    <div className="headSetIcon">
                        <i class="fa-solid fa-headset"></i>
                        
                    </div>
                    <hr />
                    <div className="contactIcon iconClass" style={{cursor: "pointer"}}>
                        <i class="fa-regular fa-id-badge"></i>
                    </div>
                    <hr />
                    <div className="setpAndService">
                        <h5>step 2/6</h5>
                        <h4>Contact Details</h4>
                    </div>
                </div>
                <div className="icons">
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
        </div>
    )

}

export default DetailsNav