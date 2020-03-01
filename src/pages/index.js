import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailSignup from "../components/mailsignup"
import { rhythm } from "../utils/typography"
import { BlogPost, Nav, Minutes, Article } from "../templates/blog-post"
import AnchorLink from "react-anchor-link-smooth-scroll"
import PostSummary from "../components/postSummary"
import Select from "../components/select"

export const RespLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse column-reverse;

  > div {
    margin: 20px;
  }

  .top {
    background: #ffcdc4;
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: space-between;
    > div {
      width: 45%;
    }
  }
  #posts {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse column-reverse;
    position: relative;
    .left {
      width: 80%;
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
    const window = window || null
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
            </div>
            <div id="background">
              <Background />
            </div>
          </div>
          <div id="search">
            <Select options={options} value={options[0]} />
          </div>
          <div id="posts">
            <div className="left" id="current">
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
          html
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
