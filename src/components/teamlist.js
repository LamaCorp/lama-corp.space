import React, { Component } from "react"
import Card from "./Card"
export default class teamlist extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          title="Diego Dorn"
          content="some content here :)"
          image="profile-pic-1.jpg"
          alt="Portrait of Diego Dorn"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          image="profile-pic-2.jpg"
          alt="Portrait of Diego Dorn"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          image="profile-pic-3.jpg"
          alt="Portrait of Diego Dorn"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          image="profile-pic-4.jpg"
          alt="Portrait of Diego Dorn"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          image="profile-pic-5.jpg"
          alt="Portrait of Diego Dorn"
          primaryButton={["/team/diego", "More about Diego"]}
        />
        <Card
          title="Diego Dorn"
          content="some content here :)"
          image="profile-pic-6.jpg"
          alt="Portrait of Diego Dorn"
          primaryButton={["/team/diego", "More about Diego"]}
        />
      </div>
    )
  }
}
