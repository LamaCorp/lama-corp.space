import React, { Component } from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"
export default class team extends Component {
  render() {
    return (
      <Layout>
        <h1>Projects</h1>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title project-title">Amazing Project</h1>
            </div>
            <p className="card-content">
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.
            </p>
            <div className="card-actions">
              <button className="button lama">
                <Link to="/projects/amazingproject">See more</Link>
              </button>
              <button className="button lama-outlined ml-1">
                <a rel="nofollow" href="https://gitlab.com">
                  Check this on GitLab
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title project-title">Amazing Project</h1>
            </div>
            <p className="card-content">
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.
            </p>
            <div className="card-actions">
              <button className="button lama">
                <Link to="/projects/amazingproject">See more</Link>
              </button>
              <button className="button lama-outlined ml-1">
                <a rel="nofollow" href="https://gitlab.com">
                  Check this on GitLab
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title project-title">Amazing Project</h1>
            </div>
            <p className="card-content">
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.
            </p>
            <div className="card-actions">
              <button className="button lama">
                <Link to="/projects/amazingproject">See more</Link>
              </button>
              <button className="button lama-outlined ml-1">
                <a rel="nofollow" href="https://gitlab.com">
                  Check this on GitLab
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title project-title">Amazing Project</h1>
            </div>
            <p className="card-content">
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.
            </p>
            <div className="card-actions">
              <button className="button lama">
                <Link to="/projects/amazingproject">See more</Link>
              </button>
              <button className="button lama-outlined ml-1">
                <a rel="nofollow" href="https://gitlab.com">
                  Check this on GitLab
                </a>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
