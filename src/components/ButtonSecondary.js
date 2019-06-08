import React, { Component } from "react"

export default class button extends Component {
  render() {
    const { link, text } = this.props

    return (
      <a rel="nofollow" href={link}>
        <button className="button lama-outlined">{text}</button>
      </a>
    )
  }
}
