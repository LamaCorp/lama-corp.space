import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Link from "../components/Link"
import SearchBar from "../components/SearchBar"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <SearchBar />
        <h1>Articles</h1>
        <div className="card-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.frontmatter.slug
            return (
              <Link to={node.fields.slug}>
                <div className="card" key={node.fields.slug}>
                  <small className="article-date">
                    {node.frontmatter.date}
                  </small>
                  <dsiv className="card-header">
                    <h3 className="card-title">{title}</h3>
                  </dsiv>
                  <p
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
