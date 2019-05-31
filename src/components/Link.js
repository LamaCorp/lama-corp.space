import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default class Link extends Component {
  render() {
    const { to, children } = this.props
    return (
      <AniLink fade to={to}>
        {children}
      </AniLink>
    )
  }
}
