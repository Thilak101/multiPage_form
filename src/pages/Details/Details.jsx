import React, { useState } from 'react'
import './details.css'
import { DetailsNav } from '../../components'
import { useNavigate } from 'react-router-dom'

const Details = () => {

  const navigate = useNavigate()

  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    link: ""
  })

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }
  const handleSubmit = () => {
    if (details.name.length > 0 && details.phoneNumber.length > 0) {
      navigate("/writtenContent")

    }
  }
  return (

    <div className='details'>
      <DetailsNav />

      <div className="container3">


        <div className="container3_heading">
          <h1>We can't wait to meet you.</h1>
          <div>
            <small className="container3_subheading">Please fill in the details below so that we can get in contact with you.</small>
          </div>
        </div>

        <form className="form" onChange={handleChange}>

          <div className="name input">
            <label htmlFor="">
              <small>Please enter your name</small>
            </label>
            <input placeholder='Name' name='name' type="text" required />
          </div>

          <div className="phoneNumber input">
            <label htmlFor="">
              <small>Please enter a phone number</small>
            </label>
            <input type="tel" name="phoneNumber" id="" placeholder='Phone Number' required pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
          </div>

          <div className="websiteLink input">
            <label htmlFor="">
              <small>Please enter a link to your website (optional)</small>
            </label>
            <input type="text" name='link' />
          </div>

          <div className="buttons">
            <div className="back" onClick={() => { navigate("/") }}>
              <i class="fa-solid fa-arrow-left"></i>
              <small>Back</small>
            </div>
            <button onClick={handleSubmit}>Next Step</button>
          </div>
        </form>

      </div>

    </div>

  )
}

export default Details