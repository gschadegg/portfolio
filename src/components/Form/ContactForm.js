import React, { useState } from "react"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha-enterprise"
import "./Form.scss"

const ContactForm = () => {
  const recaptchaRef = React.useRef()
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await recaptchaRef.current.executeAsync()

    if (token) {
      const form = e.target
      setServerState({ submitting: true })
      axios({
        method: "post",
        url: process.env.GATSBY_GETFORM_ENDPOINT,
        data: new FormData(form),
      })
        .then(res => {
          handleServerResponse(true, "Thanks!", form)
        })
        .catch(res => {
          handleServerResponse(false, res.response.data.error, form)
        })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`contactForm_wrap`}>
      <div className="formGroup">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          id="message"
          required
          placeholder="Add project details or something"
        ></textarea>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={`${process.env.GATSBY_GOOGLE_API_KEY}`}
      />
      <button
        className="submitBtn"
        type="submit"
        disabled={serverState.submitting}
      >
        Send Message
      </button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </form>
  )
}

export default ContactForm
