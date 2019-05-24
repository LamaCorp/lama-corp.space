import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <h1>About us</h1>
        <p>
          Sunt ea laborum duis nisi adipisicing magna eu. Ad adipisicing aliquip
          ex esse esse quis labore sit proident qui sint aliqua culpa. Mollit
          officia incididunt tempor id Lorem consectetur officia dolor tempor
          laboris est ad. Pariatur consequat laborum exercitation consectetur
          laborum consequat ex reprehenderit velit irure elit aliqua. Nostrud
          pariatur commodo laborum culpa deserunt nisi et velit anim. Proident
          mollit do aute aute aliqua consequat officia labore velit tempor id.
        </p>
        <Link to="/contact">
          <button className="button lama">Contact us</button>
        </Link>
      </Layout>
    )
  }
}
