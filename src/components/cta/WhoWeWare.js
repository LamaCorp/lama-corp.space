import React, { Component } from "react"
import { Link } from "gatsby"
export default class WhoWeWare extends Component {
  render() {
    return (
      <div className="cta">
        <h1 className="cta-title">Who we are</h1>
        <p className="cta-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          adipisci laudantium quos error quaerat labore quam numquam, molestias
          placeat. Laborum.
        </p>
        <div className="cta-actions">
          <Link className="button lama" to="/about">
            About us
          </Link>
        </div>
      </div>
    )
  }
}
