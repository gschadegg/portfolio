import { Component } from "react"
import ReactDOM from "react-dom"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("modal") : null

export default class Portal extends Component {
  constructor() {
    super()
    this.el =
      typeof document !== `undefined` ? document.createElement("article") : null

    this.el.setAttribute("id", "activeModal")
    this.el.setAttribute("role", "dialog")
    this.el.setAttribute("aria-modal", "true")
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
    document.body.classList.add("noscroll")
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
    document.body.classList.remove("noscroll")
  }

  render() {
    const { children } = this.props

    if (this.el) {
      return ReactDOM.createPortal(children, this.el)
    } else {
      return null
    }
  }
}
