import { StaticQuery } from "gatsby"
import React from "react"
import { graphql } from "gatsby"

import Search from "./searchBarView"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
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
    `}
    render={data => (
      <header>
        <Search searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
)

export default Header
