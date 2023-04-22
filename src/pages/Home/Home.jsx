import React from 'react'
import HomeNavbar from '../../components/homeNav/HomeNavbar'
import "./home.css"
import drawing from "../../assets/paint.png"
import message from '../../assets/message.png'
import search from "../../assets/search.png"
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleClickDrawing = () => {
        document.getElementById("drawing").style.border = "2px solid #5E31E2"
        document.getElementById("drawing").style.borderRadius = "10px"
        document.getElementById("drawing").style.padding = "10px"
        document.getElementById("message").style.border = "none"
        document.getElementById("message").style.borderRadius = "0px"
        document.getElementById("message").style.padding = "0px"
        document.getElementById("search").style.border = "none"
        document.getElementById("search").style.borderRadius = "0px"
        document.getElementById("search").style.padding = "0px"
        document.querySelector(".design").style.fontWeight = "bold"
        document.querySelector(".messagePara").style.fontWeight = "normal"
        document.querySelector(".other").style.fontWeight = "normal"

    }

    const handleClickMessage = () => {
        document.getElementById("drawing").style.border = "none"
        document.getElementById("drawing").style.borderRadius = "0px"
        document.getElementById("drawing").style.padding = "0px"
        document.getElementById("message").style.border = "2px solid #5E31E2"
        document.getElementById("message").style.borderRadius = "10px"
        document.getElementById("message").style.padding = "10px"
        document.getElementById("search").style.border = "none"
        document.getElementById("search").style.borderRadius = "0px"
        document.getElementById("search").style.padding = "0px"
        document.querySelector(".design").style.fontWeight = "normal"
        document.querySelector(".messagePara").style.fontWeight = "bold"
        document.querySelector(".other").style.fontWeight = "normal"

    }

    const handleClickSearch = () => {
        document.getElementById("drawing").style.border = "none"
        document.getElementById("drawing").style.borderRadius = "0px"
        document.getElementById("drawing").style.padding = "0px"
        document.getElementById("message").style.border = "none"
        document.getElementById("message").style.borderRadius = "0px"
        document.getElementById("message").style.padding = "0px"
        document.getElementById("search").style.border = "2px solid #5E31E2"
        document.getElementById("search").style.borderRadius = "10px"
        document.getElementById("search").style.padding = "10px"
        document.querySelector(".design").style.fontWeight = "normal"
        document.querySelector(".messagePara").style.fontWeight = "normal"
        document.querySelector(".other").style.fontWeight = "bold"
    }

    return (
        <div className='home'>
            <HomeNavbar />

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
                    <div className="paintBrush" id='drawing'>
                        <img src={drawing} alt="drawing" onClick={handleClickDrawing} />
                        <p className='design'>Design</p>
                    </div>

                    <div className="message" id='message'>
                        <img src={message} alt="message" onClick={handleClickMessage} />
                        <p className='messagePara'>Message</p>
                    </div>

                    <div className="search" id='search'>
                        <img src={search} alt="search" onClick={handleClickSearch} />
                        <p className='other'>Other</p>
                    </div>

                </div>
                <button onClick={() => { navigate("/details") }}>Next Step</button>

            </div>
        </div>
    )
}

export default Home