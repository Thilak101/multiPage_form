import React, { useState } from 'react'
import "./illustrations.css"
import { Illustration } from "../../components"
import { useNavigate } from 'react-router-dom'
import thumbsup from "../../assets/thumbsup.png"
import thumbsdown from "../../assets/thumbdown.png"

const Illustrations = () => {
    const [yesNo, setYesNo] = useState(false)

    const navigate = useNavigate()

    return (
        <>
            <div className='writtenContent'>
                <Illustration />

                <div className="container4">
                    <div className="container4_heading">
                        <h1>Do you have written contnet available</h1>
                        <div>
                            <small className="container4_subheading">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                            </small>
                        </div>
                    </div>

                    <form action="">
                        <div className="container4_YesOrNo">
                            <div
                                style={{ cursor: "pointer" }}
                                className="container4_yes"
                                onClick={
                                    () => {
                                        setYesNo(true)
                                        document.querySelector(".container4_yes").style.border = "2px solid #6334E2"
                                        document.querySelector(".container4_no").style.border = "2px solid lightgray"
                                    }
                                }>
                                <img src={thumbsup} alt="" />
                            </div>
                            <div
                                style={{ cursor: "pointer" }}
                                className="container4_no"
                                onClick={() => {
                                    setYesNo(false)
                                    document.querySelector(".container4_yes").style.border = "2px solid lightgray"
                                    document.querySelector(".container4_no").style.border = "2px solid #6334E2"
                                }}>
                                <img src={thumbsdown} alt="" />
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="back" onClick={() => { navigate("/writtenContent") }}>
                                <i class="fa-solid fa-arrow-left"></i>
                                <small>Back</small>
                            </div>
                            <button onClick={() => navigate("/projectBracket")}>Next Step</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Illustrations