import React, { Component } from "react"
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"
import Link from "./Link"
export default class Card extends Component {
  render() {
    const {
      title,
      content,
      primaryButton,
      secondaryButton,
      key,
      link,
      html,
      things,
    } = this.props
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
    const getLink = () => {
      if (link !== undefined) {
        return link
      } else if (primaryButton[0] !== undefined) {
        return primaryButton[0]
      }
    }
    return (
      <Link to={getLink()}>
        {things}
        <div className="card" key={key}>
          <div className="card-header">
            {/* <img
              src="https://source.unsplash.com/random"
              alt=""
              className="card-image"
            /> */}
            <h2 className="h1 card-title">{title}</h2>
          </div>
          <p className="card-content">{content}</p>
          <div className="card-actions">{showButton()}</div>
        </div>
      </Link>
    )
  }
}
