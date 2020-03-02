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
        Design practice has a deep capacity to reveal the unseen and to affect
        our behaviour, the systems we rely on, and the outcomes we collectively
        experience.{" "}
      </p>
      <p>
        <strong>The Diverge Weekly</strong> takes a critical global perspective
        in how design emerges from different localities, and how our design
        decisions converge to impact and influence the lives of those around the
        world.
      </p>
    </Bg>
  )
}

export default Background
