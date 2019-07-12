import React from "react"
import NavbarOnDesktop from "./NavbarOnDesktop"
import NavbarOnMobile from "./NavbarOnMobile"
import "../sass/styles.scss"
export const primary = "#ffa400"
class Layout extends React.Component {
  render() {
    const { children, noContainer } = this.props
    return (
      <div className="all">
        <header>
          <nav className="navbarOnDesktop">
            <NavbarOnDesktop />
          </nav>
          <nav className="navbarOnMobile">
            <NavbarOnMobile />
          </nav>
        </header>
        <main className={`${noContainer ? "" : "container"}`}>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()} All rights reserved, Lama Corp |
          lama-corp.space
        </footer>
      </div>
    )
  }
}

export default Layout
