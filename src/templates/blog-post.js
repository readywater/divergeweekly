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
import Classified from "../components/blog/Classified"
import FeatureAd from "../components/blog/FeatureAd"
import Jobs from "../components/blog/Jobs"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    region: Region,
    sponsor: FeatureAd,
    classified: Classified,
    jobs: Jobs,
  },
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
  h1 {
    margin-top: 0;
  }
  .meta {
    text-align: center;
  }

  .custom-block {
    margin: 10px;
    .custom-block-heading {
      font-size: 32px;
      font-weight: 800;
    }
    & > div {
      padding: 10px;

      a {
        display: block;
        font-size: 20px;
        font-weight: 800;
      }
    }

    .custom-block-body {
    }
    &.quote {
      font-style: italic;
      background: #eee;
      max-width: 30%;
      padding: 10px;
      float: right;
      font-size: 12px;
      line-height: 16px;
      @media (max-width: 700px) {
        float: none;
        padding: 20px;
        max-width: 100%;
      }
      p {
        margin: 0;
      }
    }
    &.region {
      .custom-block-heading {
        margin-bottom: 5px;
        position: relative;
        z-index: 100;
        &::after {
          content: "";
          display: block;
          height: 30%;
          position: absolute;
          top: 40%;
          left: 0;
          width: 50%;
          background: plum;
          z-index: -1 !important;
        }
      }
      & > div {
      }
    }
    &.security {
      .custom-block-heading {
        margin-bottom: 5px;
        position: relative;
        z-index: 100;
        &::after {
          content: "";
          display: block;
          height: 30%;
          position: absolute;
          top: 40%;
          left: 0;
          width: 50%;
          background: green;
          z-index: -1 !important;
        }
      }
      & > div {
      }
      a {
        color: black;
      }
    }
    &.ad {
      a {
        background: yellow;
        display: inline;
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
          <div className="meta">
            <span>
              Published on {post.frontmatter.date} under{" "}
              <Link to={`/${post.frontmatter.category}`}>
                {post.frontmatter.category.charAt(0).toUpperCase() +
                  post.frontmatter.category.slice(1)}
              </Link>
            </span>{" "}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div style={{ display: "inline" }}>
                with tags{" "}
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

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogPost post={post} />
        <hr />
        <Bio />
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
