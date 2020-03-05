import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"

class Issue extends React.Component {
  render() {
    const { data } = this.props
    const title = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Sponsor a Newsletter" />
        <h1>Sponsor an Issue</h1>
        <p>
          {title} is read by hundrds of designers and foreign policy
          professionals around the world. Support us and get your message out by
          sponsoring a weekly feature, booking a classified ad, or featuring a
          job posting.
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: `<div class="typeform-widget" data-url="https://andrewlb.typeform.com/to/wmxObI" data-transparency="50" data-hide-headers=true data-hide-footer=true style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=wmxObI&utm_source=typeform.com-01E1XSE0T6NVC9A79NSQXY2KZX-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>`,
          }}
        />
        <a href="https://andrewlb.typeform.com/to/wmxObI">
          Or go direct to the form
        </a>

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

export default Issue

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
