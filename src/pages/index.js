import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import SEO from "./../components/Seo"
import TeamList from "./../components/teamlist"
import Cta from "./../components/Cta"
import ProjectList from "./../components/ProjectList"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <Cta
          title="Who we are"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint adipisci laudantium quos error quaerat labore quam numquam, molestias placeat. Laborum."
          buttonText="About us"
          buttonLink="/about"
        />
        <h2 className="h1">Team</h2>
        <TeamList />

        <h1>Our projects</h1>
        <ProjectList />
        <Cta
          title="Contact us"
          description="Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C."
          buttonText="Contact us"
          buttonLink="/contact"
        />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
