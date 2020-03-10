import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const SponsorGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const Level = styled.div`
  width: 30%;
  padding: 10px 10px 50px 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  position: relative;
  h1 {
    font-size: 20px;
    margin-top: 0;
    text-align: center;
  }
  p {
  }
  a {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
    padding: 10px;
    text-align: center;
    background: #000;
    color: #fff;
    font-weight: 800;
    border-radius: 5px;
    &:hover {
      background: #eee;
      color: #000;
    }
  }
`

class Sponsor extends React.Component {
  render() {
    const { data } = this.props
    const title = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="About {title}" />
        <h1>About this Newsletter</h1>
        <p>
          Diverge Weekly is a newsletter exploring design in a global context,
          outside of the familiar western lens on design practice. Great
          services, purposeful architecture, incredible products, thoughtful
          interfaces: these are not isolated to a western design practice and
          education. Rather, they emerge where person-centric and
          systems-oriented sensibility combine with a practice of making things
          tangible.
        </p>
        <p>
          Our goal: provide a gateway for designers to get involved in global
          design practice by curating jobs, stories, and context with a lens to
          being critical about where design can play a role. In particular, we
          hope to identify opportunities where design has NOT traditionally had
          a seat (defence, global development, diplomacy), and work with our
          audience to infiltrate and have a design-led impact.
        </p>

        <h1>Principles</h1>
        <ul>
          <li>
            A focus on what Richard Buchanan refers to as the fourth order of
            design in an international context. That said, we also believe that
            design at this level only occurs when rooted in craft and practice.
            As such, we will look for systemic and complexity-busting examples
            of design in business and political systems, but also the design
            practice that represents different localities, cultures, and
            perspectives.
          </li>
        </ul>

        <ul>
          <li>
            This newsletter takes the perspective that we lose the thread on the
            person centric nature of design if we anthropomorphize systems and
            political constructs. To that end, we specifically focus on people
            and collectives within regions, and try not to focus on the action
            of a nation, but rather emphasize the actions and creations of an
            administration, a person, or a business.
          </li>
        </ul>

        <h1>Who writes this?</h1>
        <p>
          <a href="https://andrewlb.com">Andrew Lovett-Barron</a> is a
          Canadian/American dual citizen currently living in Denmark. He has
          worked in design for the past decade at IDEO and the US Digital
          Service, and has worked with the New America foundation and the
          Copenhagen Institute of Interaction Design. He is currently pursuing a
          masters in international security studies at the University of
          Leicester, runs <a href="https://knowsi.com">Knowsi</a>, and consults
          on product management and co-design.
        </p>
      </Layout>
    )
  }
}

export default Sponsor

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
