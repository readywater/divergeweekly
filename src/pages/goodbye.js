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
        <SEO title="Thanks for reading" />
        <h1>Sorry to see you go!</h1>
        <p>Thanks for reading Diverge while you did!</p>
        <p>
          Sorry we didn't quite live up to your expectations, but this
          newsletter is an experiment and can only grow when it falls down
          sometimes! If you're willing, I'd appreciate it if you could share
          your experience or thoughts in this short survey!
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: `<div class="typeform-widget" data-url="https://andrewlb.typeform.com/to/hfePNm" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=hfePNm&utm_source=typeform.com-01E1XSE0T6NVC9A79NSQXY2KZX-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>`,
          }}
        />
        <a href="https://andrewlb.typeform.com/to/hfePNm">
          Or go direct to the form
        </a>
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
