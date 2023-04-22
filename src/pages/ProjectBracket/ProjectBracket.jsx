import React from 'react'
import './projectBracket.css'
import { ProjectBraketNav } from "../../components"
import bulb from "../../assets/light-bulb.png"
import money from "../../assets/money.png"
import target from "../../assets/target.png"
import { useNavigate } from 'react-router-dom'

const ProjectBracket = () => {
    const navigate = useNavigate()

    const handleClickBulb = () => {
        document.getElementById("target").style.border = "none"
        document.getElementById("target").style.borderRadius = "0px"
        document.getElementById("target").style.padding = "0px"
        document.getElementById("money").style.border = "none"
        document.getElementById("money").style.borderRadius = "0px"
        document.getElementById("money").style.padding = "0px"
        document.getElementById("bulb").style.border = "2px solid #5E31E2"
        document.getElementById("bulb").style.borderRadius = "10px"
        document.getElementById("bulb").style.padding = "10px"
        document.querySelector(".targetRate").style.fontWeight = "normal"
        document.querySelector(".moneyRate").style.fontWeight = "normal"
        document.querySelector(".bulbRate").style.fontWeight = "bold"


    }
    const handleClickMoney = () => {
        document.getElementById("target").style.border = "none"
        document.getElementById("target").style.borderRadius = "0px"
        document.getElementById("target").style.padding = "0px"
        document.getElementById("money").style.border = "2px solid #5e31e2"
        document.getElementById("money").style.borderRadius = "10px"
        document.getElementById("money").style.padding = "10px"
        document.getElementById("bulb").style.border = "none"
        document.getElementById("bulb").style.borderRadius = "0px"
        document.getElementById("bulb").style.padding = "0px"
        document.querySelector(".targetRate").style.fontWeight = "normal"
        document.querySelector(".moneyRate").style.fontWeight = "bold"
        document.querySelector(".bulbRate").style.fontWeight = "normal"
    }
    const handleClickTarget = () => {
        document.getElementById("target").style.border = "2px solid #5e31e2"
        document.getElementById("target").style.borderRadius = "10px"
        document.getElementById("target").style.padding = "10px"
        document.getElementById("money").style.border = "none"
        document.getElementById("money").style.borderRadius = "0px"
        document.getElementById("money").style.padding = "0px"
        document.getElementById("bulb").style.border = "none"
        document.getElementById("bulb").style.borderRadius = "0px"
        document.getElementById("bulb").style.padding = "0px"
        document.querySelector(".targetRate").style.fontWeight = "bold"
        document.querySelector(".moneyRate").style.fontWeight = "normal"
        document.querySelector(".bulbRate").style.fontWeight = "normal"
    }

    return (
        <>
            <div className="projectBracket">
                <ProjectBraketNav />

                <div className="container2">
                    <div className="headingAndSub">
                        <div className="heading">
                            <h1>What Services do you need?</h1>
                            <div className="subheading">
                                <small>Sed ut perspiciatis unde omnis iste natus error sit vouptatem.</small>
                            </div>
                        </div>
                    </div>

                    <div className="images">
                        <div className="target" id='target' style={{ cursor: "pointer" }} >
                            <img src={target} alt="target" onClick={handleClickTarget} />
                            <p className='targetRate'>$5,000 +</p>
                        </div>

                        <div className="money" id='money' style={{ cursor: "pointer" }}>
                            <img src={money} alt="money" onClick={handleClickMoney} />
                            <p className='moneyRate'>$10,000 +</p>
                        </div>

                        <div className="bulb" id='bulb' style={{ cursor: "pointer" }}>
                            <img src={bulb} alt="bulb" onClick={handleClickBulb} />
                            <p className='bulbRate'>$20,000 +</p>
                        </div>

                    </div>
                    <div className="buttons">
                        <div className="back" style={{cursor: "pointer"}} onClick={() => { navigate("/illustrations") }}>
                            <i class="fa-solid fa-arrow-left"></i>
                            <small>Back</small>
                        </div>
                        <button>Next Step</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectBracket