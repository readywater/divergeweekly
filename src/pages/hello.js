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

class Hello extends React.Component {
  render() {
    const { data } = this.props
    const title = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Thanks for reading" />
        <h1>Sorry to see you go!</h1>
        <p>Thanks for subscribing to diverge!</p>
      </Layout>
    )
  }
}

export default Hello

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
