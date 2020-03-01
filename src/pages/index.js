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
import Select from "react-dropdown-select"

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

const StyledSelect = styled(Select)`
  background: #333;
  border: #333 !important;
  color: #fff;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #fff;
  }
  .react-dropdown-select-option {
    border: 1px solid #fff;
  }
  .react-dropdown-select-item {
    color: #333;
  }
  .react-dropdown-select-input {
    color: #fff;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 500px;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 300px;
    overflow: auto;
    z-index: 9;
    background: #333;
    box-shadow: none;
    color: #fff !important;
  }
  .react-dropdown-select-item {
    color: #f2f2f2;
    border-bottom: 1px solid #333;

    :hover {
      color: #ffffff80;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    //background: #111;
    border-bottom: 1px solid #333;
    color: #fff;
    font-weight: bold;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
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
            <StyledSelect
              options={posts.map(({ node }) => {
                const ret = {
                  id: node.frontmatter.issue,
                  key: node.fields.slug,
                  name: node.frontmatter.title || node.fields.slug,
                  link: `/${node.frontmatter.category}${node.fields.slug}`,
                }
                console.log(ret)
                return ret
              })}
              placeholder="Select an issue"
              values={[options[0]]}
              dropdownPosition="auto"
              onChange={value => {
                console.log("Changing!", value)
                if (window) window.location.href = value[0].link
              }}
            />
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
