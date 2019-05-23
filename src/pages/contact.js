import React, { Component } from "react"
import Layout from "../components/layout"
export default class contact extends Component {
  render() {
    function bindValue(e) {
      console.log(e)
    }
    return (
      <Layout>
        <h1>Contact us</h1>
        <form>
          <input className="field" type="name" placeholder="Enter your name" />
          <input
            className="field"
            type="name"
            placeholder="Enter the subject"
          />
          <textarea
            onChange={bindValue()}
            className="field"
            placeholder="Body"
          />
          <a href="mailto://null" className="button lama mt-2">
            Send
          </a>
        </form>
      </Layout>
    )
  }
}
