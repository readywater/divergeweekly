import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Image from "gatsby-image"
import { Minutes } from "../templates/blog-post"

const Summary = styled.article`
  width: auto;
`

export default class PostSummary extends React.Component {
  static propTypes = {
    node: PropTypes.object.isRequired,
  }

  render() {
    const { node } = this.props
    return (
      <Summary key={node.fields.eslug} style={{ marginBottom: rhythm(2) }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "bottom",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link
              style={{ boxShadow: `none` }}
              to={`/${node.frontmatter.category}${node.fields.slug}`}
            >
              Issue #{node.frontmatter.issue}: {node.frontmatter.title}
            </Link>
          </h3>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
          <section>
            <Link
              style={{ boxShadow: `none`, color: "#000" }}
              to={`/${node.frontmatter.category}${node.fields.slug}`}
            >
              <small>{node.frontmatter.date}</small>
              <p
                style={{ marginBottom: rhythm(0.25) }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Link>
          </section>
        </div>
      </Summary>
    )
  }
}
