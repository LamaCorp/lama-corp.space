import React, { Component } from "react"
import Layout from "../components/layout"
import ProjectList from "../components/ProjectList"
export default class team extends Component {
  render() {
    return (
      <Layout>
        <h1>Projects</h1>
        <ProjectList />
      </Layout>
    )
  }
}
