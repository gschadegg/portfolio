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
    const TYmessage = (
      <>
        <h3>Thanks for Your Message!</h3>
        <p>I've recieved your message and will be in touch soon. </p>
      </>
    )

    if (token) {
      const form = e.target
      setServerState({ submitting: true })
      axios({
        method: "post",
        url: process.env.GATSBY_GETFORM_ENDPOINT,
        data: new FormData(form),
      })
        .then(res => {
          handleServerResponse(true, TYmessage, form)
        })
        .catch(res => {
          handleServerResponse(false, res.response.data.error, form)
        })
    }
  }
  if (serverState.status) {
    setTimeout(() => {
      setServerState({
        submitting: false,
        status: null,
      })
    }, 5000)
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
          placeholder="Type your message here"
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
      <p className="basicText text-white/40 sm text-center">
        This site is protected by reCAPTCHA and the Google
        <br />
        <a className="underline" href="https://policies.google.com/privacy">
          {" "}
          Privacy Policy
        </a>{" "}
        and
        <a className="underline" href="https://policies.google.com/terms">
          {" "}
          Terms of Service
        </a>{" "}
        apply.
      </p>

      {serverState.status && (
        <div
          className={`responseMessage ${
            !serverState.status.ok ? "errorMsg" : ""
          }`}
        >
          {serverState.status.msg}
        </div>
      )}
    </form>
  )
}

export default ContactForm
