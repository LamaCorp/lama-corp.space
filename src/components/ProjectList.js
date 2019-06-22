import React, { Component } from "react"
import Card from "./Card"
export default class ProjectList extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          restyled
          title="Amazing Project"
          content="Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C."
          primaryButton={["/projects/amazingproject", "See more"]}
          secondaryButton={[
            "https://www.gitlab.com",
            "Check this on GitLab",
            true,
          ]}
        />
        <Card
          restyled
          title="Amazing Project"
          content="Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C."
          primaryButton={["/projects/amazingproject", "See more"]}
          secondaryButton={[
            "https://www.gitlab.com",
            "Check this on GitLab",
            true,
          ]}
        />
        <Card
          restyled
          title="Amazing Project"
          content="Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C."
          primaryButton={["/projects/amazingproject", "See more"]}
          secondaryButton={[
            "https://www.gitlab.com",
            "Check this on GitLab",
            true,
          ]}
        />
        <Card
          restyled
          title="Amazing Project"
          content="Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C."
          primaryButton={["/projects/amazingproject", "See more"]}
          secondaryButton={[
            "https://www.gitlab.com",
            "Check this on GitLab",
            true,
          ]}
        />
      </div>
    )
  }
}
