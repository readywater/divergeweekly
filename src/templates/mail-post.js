import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import MailLayout from "../components/mail-layout"
import SEO from "../components/seo"
import JustComments from "gatsby-plugin-just-comments"
import { rhythm, scale } from "../utils/typography"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { BlogPost, Nav, Minutes, Article } from "./blog-post"

class MailPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props.location)
    const web = String(this.props.location.href).replace("/mail", "")

    return (
      <MailLayout location={this.props.location} title={siteTitle}>
        <a href={web}>View on the Web</a>
        <BlogPost post={post} nav={false} />
      </MailLayout>
    )
  }
}

export default MailPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlugForMail($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        readingTime {
          minutes
          words
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        category
      }
    }
  }
`
