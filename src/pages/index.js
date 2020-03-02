import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailSignup from "../components/mailsignup"
import { BlogPost, Nav, Minutes, Article } from "../templates/blog-post"
import Select from "../components/select"

export const RespLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse column-reverse;
  > div {
    margin: 20px;
  }
  #newsletter {
    background: #ffcdc4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    > div {
      @media (max-width: 700px) {
        max-width: 100%;
      }
      max-width: 50%;
    }
  }
  .top {
    display: flex;
    width: 100%;
    padding: 20px;
    @media (max-width: 700px) {
      padding: 0;
    }
    justify-content: space-between;
    flex-wrap: wrap;
    > div {
      width: 100%;
      @media (max-width: 700px) {
        width: 100% !important;
        display: block;
        margin: 10px;
        padding: 10px;
      }
      margin: 20px;
      padding: 20px;
    }
  }
  #posts {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse column-reverse;
    position: relative;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 700px) {
      padding: 10px;
    }
    .center {
      max-width: 800px;
      margin: 0 auto;
      @media (max-width: 700px) {
        width: 100%;
      }
    }
    .right {
      width: 20%;
      height: 100%;
      display: sticky;
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
`

export const RespNav = styled(Nav)`
  @media (min-width: 700px) {
    display: none;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const options = posts.map(({ node }) => {
      const ret = {
        id: node.frontmatter.issue,
        key: node.frontmatter.issue,
        label: `Issue #${node.frontmatter.issue}: ${node.frontmatter.title}`,
        link: `/${node.frontmatter.category}${node.fields.slug}`,
      }
      console.log(ret)
      return ret
    })
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <RespLayout>
          <div className="top">
            {/* <Bio /> */}
            <div id="newsletter">
              <EmailSignup />
              <div id="search">
                <small>Read Previous Issues:</small>
                <Select options={options} value={options[0]} />
              </div>
            </div>
            <div id="background">
              <Background title={siteTitle} />
            </div>
          </div>
          <div id="posts">
            <div className="center" id="current">
              <BlogPost post={posts[0].node} />
            </div>
          </div>
        </RespLayout>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___issue], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          htmlAst
          fields {
            slug
            readingTime {
              minutes
              words
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            issue
            published
            description
            category
            tags
          }
        }
      }
    }
  }
`
