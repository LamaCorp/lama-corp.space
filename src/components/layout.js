import React from "react"
import Navbar from "../components/navbar"

// eslint-disable-next-line
import * as styles from "../sass/styles.scss"
class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="all">
        {this.props.noContainer !== undefined ? (
          <div>
            <Navbar noContainer />
            <div>{children}</div>
          </div>
        ) : (
          <div>
            <Navbar />
            <div className="container">
              <div>{children}</div>
            </div>
          </div>
        )}

        <footer>
          © {new Date().getFullYear()} All rights reserved, Lama Corp |
          lama-corp.space
        </footer>
      </div>
    )
  }
}

export default Layout
