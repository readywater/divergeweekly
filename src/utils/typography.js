import React from "react"
import Typography from "typography"
import Wordpress2016 from "typography-theme-stow-lake"
import styled from "styled-components"

export const theme = {
  red: "#FE011F",
  deep: "#000000",
  black: "#2F3034",
  grey: "#3A3A3A",
  offbeige: "#BDB997",
  beige: "#D8B784",
  offwhite: "#F4F4F4",
  white: "#ffffff",
  lightgreen: "#D4EEE6",
  green: "#078B8D",
  pink: "#ffcdc4",
  tinyWidth: "400px",
  unitWidth: "800px",
  maxWidth: "1200px",
  bs: "0 3px 24px 0 rgba(0, 0, 0, 0.09)",
  bsrev: "0 -3px 24px 0 rgba(0, 0, 0, 0.09)",
  br: ".5rem",
}

export const Head = styled.h2`
  margin: 20px 0 0 0;
  position: relative;
  z-index: 100;
  /* &::after {
    content: "";
    display: block;
    height: 30%;
    position: absolute;
    top: 40%;
    left: 0;
    width: 50%;
    background: yellow;
    z-index: -1 !important;
  } */
`

export const Header = props => <Head>{props.children}</Head>

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: theme.black,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    td: {
      border: 0,
      margin: 0,
      padding: 0,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
