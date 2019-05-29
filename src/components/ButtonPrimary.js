import React, { Component } from "react"
import Link from "./Link"
export default class button extends Component {
  render() {
    const { link, text } = this.props
    return (
      <Link to={link}>
        <button className="button lama">{text}</button>
      </Link>
    )
  }
}
