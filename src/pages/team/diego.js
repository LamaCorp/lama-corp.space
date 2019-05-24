import React, { Component } from "react"
import Layout from "../../components/layout"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"
import { primary } from "../../components/navbar"
export default class marc extends Component {
  render() {
    return (
      <Layout noContainer>
        <div className="hero">
          <img
            className="hero-image"
            src="https://source.unsplash.com/WLUHO9A_xik/1200x1200"
            alt=""
          />
          <h1 className="hero-title">Diego Dorn</h1>
        </div>
        <div className="container">
          <div className="bio-container">
            <h1>Bio</h1>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l’imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n’a pas
              fait que survivre cinq siècles, mais s’est aussi adapté à la
              bureautique informatique, sans que son contenu n’en soit modifié.
              Il a été popularisé dans les années 1960 grâce à la vente de
              feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.
            </p>

            <Timeline lineColor={"#ddd"}>
              <TimelineItem
                key="001"
                dateText="15 april 2005"
                dateInnerStyle={{ background: primary }}
                style={{ color: primary }}
              >
                <h3>Title</h3>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
              <TimelineItem
                key="002"
                dateText="15 april 2005"
                dateInnerStyle={{ background: primary }}
                style={{ color: primary }}
              >
                <h3>Title</h3>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
              <TimelineItem
                key="003"
                dateText="15 april 2005"
                dateInnerStyle={{ background: primary }}
                style={{ color: primary }}
              >
                <h3>Title</h3>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </Layout>
    )
  }
}
