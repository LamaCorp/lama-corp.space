import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamList from "../components/teamlist"
import Link from "gatsby-link"
import Cta from "../components/cta/cta"
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
        <TeamList />
        <h1 className="articles-title">Last articles</h1>
        <div className="articles-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.frontmatter.slug
            return (
              <Link to={node.fields.slug}>
                <div className="article" key={node.fields.slug}>
                  <h3 className="article-title">{title}</h3>
                  <small className="article-date">
                    {node.frontmatter.date}
                  </small>
                  <p
                    className="article-description"
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
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
