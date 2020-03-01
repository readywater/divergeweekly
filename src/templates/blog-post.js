import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import AnchorLink from "react-anchor-link-smooth-scroll"
import rehypeReact from "rehype-react"
import Region from "../components/blog/Region"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { region: Region },
}).Compiler

export const Nav = styled.ul`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: ${rhythm(0.25)} 0;
  z-index: 1;
  margin: 1rem 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  li {
    margin-right: 1rem;
    list-style: none;
    flex: none;
    width: auto;
    a {
      border-radius: 5px;
      background: #eee;
      border: 1px solid #eee;
      padding: ${rhythm(0.25)};
      &:hover {
        border: 1px solid #000;
        background: #fff;
      }
    }
  }
`

export const Minutes = styled.div`
  display: inline-block;
  &.left {
    .min,
    .word {
      right: auto;
      left: 0;
    }
  }
  position: relative;
  .sizer {
    display: block;
    opacity: 0;
  }
  .min,
  .word {
    transition: opacity 0.4s;
    position: absolute;
    top: 0;
    right: 0;
  }
  .min {
    opacity: 1;
  }
  .word {
    opacity: 0;
  }
  &:hover {
    .min {
      opacity: 0;
    }
    .word {
      opacity: 1;
    }
  }
`

export const Header = styled.tr``

export const Article = styled.table`
  header {
    h1 {
      margin-top: 0;
    }
  }

  .custom-block {
    margin: 10px;
    & > div {
      padding: 10px;
      border: 1px solid #000;
      a {
        display: block;
        font-size: 20px;
        font-weight: 800;
      }
    }
    .custom-block-heading {
      margin-bottom: 5px;
    }
    .custom-block-body {
    }
    &.quote {
      font-style: italic;
      background: grey;
    }
    &.region {
      width: 50%;
      & > div {
        background: plum;
      }
    }
    &.security {
      & > div {
        background: greenyellow;
      }
    }
    &.ad {
      & > div {
        background: yellow;
      }
      img {
        float: left;
      }
    }
  }
`

export const BlogPost = ({ post, nav }) => {
  const n = nav || false
  return (
    <Article
      border="0"
      cellpadding="0"
      cellspacing="0"
      style={{ margin: 0, padding: 0 }}
      width="100%"
    >
      <Header>
        <td>
          <h1>
            Issue #{post.frontmatter.issue}: {post.frontmatter.title}
          </h1>
          <p>
            <div>
              <div>
                <span>
                  Published on {post.frontmatter.date} under{" "}
                  <Link to={`/${post.frontmatter.category}`}>
                    {post.frontmatter.category.charAt(0).toUpperCase() +
                      post.frontmatter.category.slice(1)}
                  </Link>
                </span>{" "}
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <div style={{ display: "inline" }}>
                    with tags
                    {post.frontmatter.tags.map(t => {
                      return (
                        <Link to={`/tag/${t}`}>
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </p>
        </td>
      </Header>
      {n && (
        <Nav>
          <li>
            <AnchorLink href="#newsletter">Follow Newsletter</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#comment">Leave Comments</AnchorLink>
          </li>
        </Nav>
      )}
      <div>{renderAst(post.htmlAst)}</div>
    </Article>
  )
}
//// <section dangerouslySetInnerHTML={{ __html: post.html }} />

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogPost post={post} nav={true} />
        <hr />
        <footer>
          <Bio />
        </footer>

        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <mailsignup />
      </Layout>
    )
  }
}

export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
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
