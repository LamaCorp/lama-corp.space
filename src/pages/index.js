import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TeamList from "../components/teamlist"
import Link from "../components/Link"
import Cta from "../components/Cta"
import ProjectList from "../components/ProjectList"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

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

        <h1 className="articles-title">
          <Link to="/blog">Last articles </Link>
        </h1>
        <div className="card-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.frontmatter.slug
            return (
              <Link to={node.fields.slug}>
                <div className="card" key={node.fields.slug}>
                  <small>{node.frontmatter.date}</small>
                  <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                  </div>
                  <p
                    className="card-content"
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
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
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
