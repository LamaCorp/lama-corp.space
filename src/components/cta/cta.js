import React, { Component } from "react"
import { Link } from "gatsby"
// import Link from "gatsby-link"
export default class cta extends Component {
  render() {
    var buttons = []
    const showButtons = () => {
      if (
        this.props.multipleButtons !== undefined &&
        this.props.buttons !== undefined
      ) {
        this.props.buttons.forEach(button => {
          buttons.push(
            <button className="button lama cta-multiple-button">
              <Link to={button[1]}>{button[0]}</Link>
            </button>
          )
        })
        return buttons
      } else if (this.props.buttonText !== undefined) {
        return (
          <button className="button lama">
            <Link to={this.props.buttonLink}>{this.props.buttonText}</Link>
          </button>
        )
      } else {
        return (
          <span
            style={{
              color: "#f00",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            (ERROR) You need to add at least one button
          </span>
        )
      }
    }
    return (
      <div>
        <div className="cta">
          <h1 className="cta-title">{this.props.title}</h1>
          <p className="cta-subtitle">{this.props.description}</p>
          <div className="cta-actions">{showButtons()}</div>
        </div>
      </div>
    )
  }
}
