import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import Header from "../components/SearchBar"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <Header />
        <h1 className="articles-title">Articles</h1>
        <div className="articles-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.frontmatter.slug
            return (
              <div className="article" key={node.fields.slug}>
                <h3 className="article-title">
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small className="article-date">{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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