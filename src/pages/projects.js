import React, { Component } from "react"
import Layout from "./../components/Layout"
import ProjectList from "./../components/ProjectList"
import Seo from "./../components/Seo"
export default class team extends Component {
  render() {
    return (
      <Layout>
        <Seo title="Projects" />
        <h1>Projects</h1>
        <ProjectList />
      </Layout>
    )
  }
}
