import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react"
import { Icon } from "@iconify/react"

import Portal from "./Portal"

import "./Modal.scss"

const Modal = forwardRef(({ children }, ref) => {
  // type: light, dark

  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    }
  })

  const handleOpen = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
  }

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        handleClose()
      }
    }

    window.addEventListener("keydown", close)
    return () => {
      window.removeEventListener("keydown", close)
      window.addEventListener("click", close)
    }
  }, [])

  if (display) {
    return (
      <Portal>
        <div
          aria-label="Close"
          tabIndex="0"
          role="button"
          onClick={handleClose}
          onKeyDown={handleClose}
          className={`modal_overlay`}
        ></div>
        <div className={`modal_container`}>
          <button
            aria-label="Close"
            className={"closeBtn"}
            onKeyDown={handleClose}
            onClick={() => {
              setDisplay(false)
            }}
          >
            <Icon className="mr-[12px]" icon="bytesize:arrow-left" width="20" />
            Close
          </button>
          {children}
        </div>
      </Portal>
    )
  }

  return null
})

export default Modal
