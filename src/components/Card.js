import React, { Component } from "react"
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"
import Link from "./Link"
export default class Card extends Component {
  render() {
    const { title, content, primaryButton, secondaryButton } = this.props
    const buttons = []
    const showButton = () => {
      if (primaryButton !== undefined) {
        buttons.push(
          <ButtonPrimary text={primaryButton[1]} link={primaryButton[0]} />
        )
      }
      if (secondaryButton !== undefined) {
        if (secondaryButton[2] === true) {
          buttons.push(
            <ButtonSecondary
              externalLink
              text={secondaryButton[1]}
              link={secondaryButton[0]}
            />
          )
        } else {
          buttons.push(
            <ButtonSecondary
              text={secondaryButton[1]}
              link={secondaryButton[0]}
            />
          )
        }
      }
      return buttons
    }
    return (
      <Link to={primaryButton[0]}>
        <div className="card">
          <div className="card-header">
            <h2 className="h1 card-title">{title}</h2>
          </div>
          <p className="card-content">{content}</p>
          <div className="card-actions">{showButton()}</div>
        </div>
      </Link>
    )
  }
}
