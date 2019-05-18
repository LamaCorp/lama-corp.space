import React, { Component } from "react"
import { Link } from "gatsby"
import MenuIcon from "../../assets/i-menu.svg"
import CloseIcon from "../../assets/i-close.svg"
export default class navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { addClass: false }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass })
  }
  render() {
    let navClass = ["navbar"]
    if (this.state.addClass) {
      navClass.push("active")
    }
    return (
      <nav className={navClass.join(" ")} onClick={this.toggle.bind(this)}>
        <div className="navbar-container">
          <Link className="brand" to="/">
            <span>Lama Corp</span>
          </Link>
          <span className="toggle">
            {this.state.addClass ? <CloseIcon /> : <MenuIcon />}
          </span>
        </div>
        <ul className="navbar-items">
          <li className="item">
            <Link to="/team">Team</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
