import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Bio from "../components/bio"
import Background from "../components/background"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import EmailSignup from "../components/mailsignup"
import { BlogPost, Nav, Minutes, Article } from "../templates/blog-post"
import Select from "../components/select"

export const RespLayout = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse column-reverse;
  > div {
    margin: 0;
  }
  #newsletter {
    background: white;
    border: 10px solid #ffcdc4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .header {
      width: 100%;
      display: block;
    }
    > div {
      margin: 0 10px;
      @media (max-width: 700px) {
        max-width: 100%;
      }
      max-width: 45%;
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
      /* margin: 20px; */
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
            <div id="newsletter">
              <div className="header">
                <h3
                  style={{
                    margin: "0",
                    marginTop: 0,
                    lineHeight: rhythm(1),
                    marginBottom: rhythm(0.5),
                  }}
                >
                  Every Wednesday, a look at design practice from around the
                  world and its impact on those who inhabit it.
                </h3>
                <p style={{ fontSize: rhythm(0.5), lineHeight: rhythm(1) }}>
                  Regional design news, international jobs, featured designers,
                  and more!
                </p>
              </div>
              <div id="search">
                <EmailSignup />
                <small>Read Previous Issues:</small>
                <Select options={options} value={options[0]} />
              </div>
            </div>
          </div>
          <div id="posts">
            <div className="center" id="current">
              <BlogPost post={posts[0].node} />
              <Bio mail={false} />
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
