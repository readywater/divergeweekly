import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Bio from "../components/bio"
import Background from "../components/background"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import { BlogPost, Nav, Minutes, Article } from "../templates/blog-post"
import { theme, Header } from "../utils/typography"

export const RespLayout = styled.div`
  z-index: 1;
  max-width: 1024px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse column-reverse;
  > div {
    margin: 0;
  }
  @media (max-width: 700px) {
  }

  #posts {
    width: 70%;
    @media (max-width: 700px) {
      width: 100%;
    }
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
        thumbnail: data.diverge,
        label: `Issue #${node.frontmatter.issue}: ${node.frontmatter.title}`,
        link: `/${node.frontmatter.category}${node.fields.slug}`,
      }
      // console.log(ret)
      return ret
    })
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <RespLayout>
          <Navigation options={options} value={options[0]} />
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
    diverge: file(absolutePath: { regex: "/diverge.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
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
