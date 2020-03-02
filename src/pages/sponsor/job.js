import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"

class Job extends React.Component {
  render() {
    const { data } = this.props
    const title = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Sponsor a Newsletter" />
        <h1>List a Job Posting</h1>
        <p>
          {title} is read by hundrds of designers and foreign policy
          professionals around the world. Support us and get your message out by
          sponsoring a weekly feature, booking a classified ad, or featuring a
          job posting.
        </p>

        <p>Typeform goes here</p>

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

export default Job

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
