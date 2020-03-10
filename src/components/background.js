import React from "react"

import { rhythm } from "../utils/typography"

import styled from "styled-components"

const Bg = styled.div`
  font-size: 14px;
`

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

const Background = props => {
  return (
    <Bg>
      <p>
        <strong>Diverge Weekly</strong> is a newsletter exploring design in a
        global context, outside of the familiar western lens on design practice.
        Great services, purposeful architecture, incredible products, thoughtful
        interfaces: these emerge where person-centric and systems-oriented
        sensibility combine with a practice of making things tangible.
      </p>
      <p>
        Our goal: provide a gateway for designers to get involved in global
        design practice by curating jobs, stories, and context with a lens to
        being critical about where design can play a role. In particular, we
        hope to identify opportunities where design has NOT traditionally had a
        seat (defence, global development, diplomacy), and work with our
        audience to infiltrate and have a design-led impact.{" "}
      </p>
    </Bg>
  )
}

export default Background
