import React, { Component } from "react"
import { Link } from "gatsby"
import ButtonPrimary from "./ButtonPrimary"
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
          buttons.push(<ButtonPrimary link={button[1]} text={button[0]} />)
        })
        return buttons
      } else if (this.props.buttonText !== undefined) {
        return (
          <ButtonPrimary
            link={this.props.buttonLink}
            text={this.props.buttonText}
          />
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
