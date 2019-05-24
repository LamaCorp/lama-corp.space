import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          autoFocus
          className="searchField"
          placeholder="Enter your search query here."
          value={this.state.query}
          onChange={this.search}
        />
        <div className="search-results">
          {this.state.results.map(page => (
            <div className="search-result" key={page.fields.slug}>
              <span>
                <Link to={"/" + page.slug}>{page.title}</Link>
              </span>
              <br />
              <p
                dangerouslySetInnerHTML={{
                  __html: page.excerpt,
                }}
              />
            </div>
          ))}
          {this.state.results === [] ? <span>Prout</span> : ""}
        </div>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
