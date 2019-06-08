import React, { Component } from "react"
import Card from "./Card"
import Image from "gatsby-image"
import { graphql } from "gatsby"
export default class teamlist extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          title="Diego Dorn"
          content="some content here :)"
          // image={}
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          primaryButton={["/team/diego", "More about Diego"]}
        />
      </div>
    )
  }
}
