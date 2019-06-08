import { StaticQuery } from "gatsby"
import React from "react"
import { graphql } from "gatsby"

import Search from "./SearchBarView"

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
              html
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
    render={data => <Search searchIndex={data.siteSearchIndex.index} />}
  />
)

export default Header
