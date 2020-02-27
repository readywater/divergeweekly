import React from "react"

import { rhythm } from "../utils/typography"

import styled from "styled-components"

export const Button = styled.a`
  border-radius: 5px;
  background: #eee;
  border: 1px solid #eee;
  padding: ${rhythm(0.25)};
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
    background: #fff;
  }
  button {
    -webkit-appearance: none;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 340px;
  li {
    margin-bottom: ${rhythm(0.5)};
    margin-right: ${rhythm(0.5)};
    margin-left: 0;
    max-width: 150px;
    position: relative;
    @media (max-width: 700px) {
      * > {
        max-width: 150px;
      }
    }
    @media (min-width: 700px) {
      a,
      p {
        transition: opacity 0.6s;
      }
      .gatsby-image-wrapper {
        text-decoration: none;
        border: 0;
        box-shadow: 0;
      }
      p {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 150px;
        opacity: 0;
        z-index: 0;
        font-size: ${rhythm(0.5)};
      }
      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        z-index: 1;
      }
      &:hover {
        .gatsby-image-wrapper {
          opacity: 0;
        }
        p {
          opacity: 1;
        }
      }
    }
  }
`

const Background = () => {
  return (
    <div
      style={{
        // maxWidth: "150px",
        display: `flex`,
        flexWrap: `wrap`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div>
        <p>
          The Converge Review is your weekly look at design in a global context.
          Design practice has a profound capacity to reveal the unseen and to
          affect our behaviour, the systems we rely on, and the outcomes we
          collectively experience. The Converge Review aims to take a critical
          global perspective in how design emerges from different localities,
          and how our design decisions converge to impact and influence the
          lives of those around the world.
        </p>
        <p>Interested in a collaboration?</p>
        <Button href="mailto:alb@andrewlb.com" class="btn">
          Let's chat
        </Button>

        <small>
          <a
            href="https://andrewlb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            andrewlb.com
          </a>
        </small>
      </div>
    </div>
  )
}

export default Background
