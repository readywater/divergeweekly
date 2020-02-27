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
    return (
      <Layout location={this.props.location}>
        <SEO title="Sponsor a Newsletter" />
        <h1>Sponsor the Converge Report</h1>
        <p>
          The Converge Review is read by hundrds of designers and foreign policy
          professionals around the world. Support us and get your message out by
          sponsoring a weekly feature, booking a classified ad, or featuring a
          job posting.
        </p>
        <SponsorGrid>
          <Level>
            <h1>Sponsor an Issue</h1>
            <p>
              Issue sponsors are posted at the top, right below are
              introduction. They get a highlighted treatment, more text per
              newsletter, and an image.
            </p>
            <a href="#">Sponsor Ad</a>
          </Level>
          <Level>
            <h1>Share a Job Post</h1>
            <p>
              We share relevant job posts with our community because we want
              great people filling them. A featured job posts are highlighted
              and contain more information.
            </p>
            <a href="#">Sponsor Ad</a>
          </Level>
          <Level>
            <h1>Post an Ad</h1>
            <p>
              Ads are small posts at the bottom of the newsletter. We feature a
              maximum of 4 of these small ads per newsletter.
            </p>
            <a href="#">Sponsor Ad</a>
          </Level>
        </SponsorGrid>
        <h2>Terms and Conditions</h2>
        <p>
          We reserve the right to reject ads based on content grounds.
          Specifically, we choose not to feature any advertising that excludes
          or marginalizes peoples
        </p>
      </Layout>
    )
  }
}

export default Sponsor
