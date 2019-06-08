import React from "react"
import NavbarOnDesktop from "./NavbarOnDesktop"
import NavbarOnMobile from "./NavbarOnMobile"
import "../sass/styles.scss"
export const primary = "#ffa400"
class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="all">
        <div className="navbarOnDesktop">
          <NavbarOnDesktop />
        </div>
        <div className="navbarOnMobile">
          <NavbarOnMobile />
        </div>
        <div className="container">{children}</div>
        <footer>
          &copy; {new Date().getFullYear()} All rights reserved, Lama Corp |
          lama-corp.space
        </footer>
      </div>
    )
  }
}

export default Layout
