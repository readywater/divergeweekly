import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"

const SponsorGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Level = styled.div`
  width: 30%;
  @media (max-width: 700px) {
    width: 100%;
  }
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
        <SEO title="Sponsor a Newsletter" />
        <h1>Sponsor {title}</h1>
        <p>
          {title} is read by hundreds of designers and foreign policy
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
              newsletter, and an image. You make the magic happen!
            </p>
            <Link to={`/sponsor/issue`}>Sponsor an Issue</Link>
          </Level>
          <Level>
            <h1>Share a Job Post</h1>
            <p>
              We share relevant job posts with our community because we want
              great people filling them. Featured job posts are highlighted and
              contain more information.
            </p>
            <Link to={`/sponsor/job`}>Post a Job</Link>
          </Level>
          <Level>
            <h1>Post an Ad</h1>
            <p>
              Ads are small posts at the bottom of the newsletter. We feature a
              maximum of 4 of these small ads per newsletter.
            </p>
            <Link to={`/sponsor/ad`}>Post Ad</Link>
          </Level>
        </SponsorGrid>
        <h2>Terms and Conditions</h2>
        <p>
          Basically, we reserve the right to reject ads on content grounds.
          You'll be refunded minus any processing fees if that's the case.
          Unless the content is clearly hateful or discriminatory, we'll reach
          out first to discuss.
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
