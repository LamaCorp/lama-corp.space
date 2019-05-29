import React, { Component } from "react"
import Layout from "../components/layout"
import { mail } from "../data/info.json"
import Seo from "../components/Seo"

export default class contact extends Component {
  constructor(props) {
    super(props)
    this.state = { body: "", subject: "" }

    this.handleBody = this.handleBody.bind(this)
    this.handleSubject = this.handleSubject.bind(this)
  }

  handleBody(event) {
    this.setState({ body: event.target.value })
  }

  handleSubject(event) {
    this.setState({ subject: event.target.value })
  }

  render() {
    const mailtoLink = `mailto:${mail}?subject=${this.state.subject}&body=${
      this.state.body
    }`

    return (
      <Layout>
        <Seo title="Contact" />
        <h1>Contact us</h1>
        <form>
          <input
            className="field"
            type="text"
            onChange={this.handleSubject}
            placeholder="Enter the subject"
          />
          <textarea
            onChange={this.handleBody}
            className="field"
            placeholder="Body"
            value={this.state.value}
          />

          <a href={mailtoLink} className="button lama mt-2">
            Send
          </a>
        </form>
        {/*  mailto:lamacorp@netlify.com?subject=This%20is%20the%20subject&body=This%20is%20my%20body */}
      </Layout>
    )
  }
}
