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

export const RespLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse column-reverse;

  .top {
    background: #ffcdc4;
    display: flex;
    width: 100%;
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

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <RespLayout>
          <div className="top" style={{ marginRight: rhythm(1) }}>
            {/* <Bio /> */}
            <div id="newsletter">
              <EmailSignup />
            </div>
            <div id="background">
              <Background />
            </div>
          </div>
          <div id="posts">
            <div className="left" id="current">
              <BlogPost post={posts[0].node} />
            </div>
            <div className="right" id="archive">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return <PostSummary node={node} />
              })}
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
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
