import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const theme = {
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
  tinyWidth: "400px",
  unitWidth: "800px",
  maxWidth: "1200px",
  bs: "0 3px 24px 0 rgba(0, 0, 0, 0.09)",
  bsrev: "0 -3px 24px 0 rgba(0, 0, 0, 0.09)",
  br: ".5rem",
}

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'apercu-regular';
    src: url('/static/fonts/apercu-regular.eot');
    src: url('/static/fonts/apercu-regular.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/apercu-regular.woff2') format('woff2'),
         url('/static/fonts/apercu-regular.woff') format('woff'),
         url('/static/fonts/apercu-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'apercu-bold';
    src: url('/static/fonts/apercu-bold.eot');
    src: url('/static/fonts/apercu-bold.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/apercu-bold.woff2') format('woff2'),
         url('/static/fonts/apercu-bold.woff') format('woff'),
         url('/static/fonts/apercu-bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
  .text-input:focus {
    outline: 1px solid #aaa;
  }
  button:focus,
  select:focus {
    outline: none;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
    // max-width: 1024px;
    margin: 0 auto;
    padding: 0;
    min-height: 100vh;
    font-size: 1.6rem;
    line-height: 2;
    overflow-x:hidden;
    font-family: 'apercu-regular','san-serif';
    /* -webkit-user-select: none; */
    -webkit-tap-highlight-color: ${props => props.theme.lightgreen};
    -webkit-touch-callout: none;
    *&::selection { color: ${props => props.theme.beige}; }

    .page-transition-enter {
      opacity: 0;
    }
    .page-transition-enter-active {
      opacity: 1;
      transition: opacity .4s;
    }
    .page-transition-exit {
      opacity: 1;
    }
    .page-transition-exit-active {
      opacity: 0;
      transition: opacity .4s;
    }
  }
  hr {
    margin: 3rem auto;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
    font-family: 'apercu-regular','san-serif';
  }

  h1, h2, h3 {
    font-family: 'apercu-bold','san-serif';
    font-size: 2.4rem; 
    color: ${props => props.theme.black};
    letter-spacing: 0;
    &.center {
      text-align: center;
    }
  }
  h1 {
    font-size: 42px;
    line-height: 10rem;
    text-align: center;
  }
  h2 {
    font-size: 2.4rem;
    /* line-height: 4rem; */
  }

  p {
    font-family: 'apercu-regular','san-serif';
    font-size: 1.6rem;
    line-height: 3rem;
    color: ${props => props.theme.black};
    letter-spacing: 0;
    &.center {
      text-align: center;
      margin: 1rem auto;
    }
    &.strong {
      font-weight:800;
    }
  }
  h4 {
    &.center {
      text-align: center;
    }
  }

  .small {
    font-size: 10px;
  }

  .gray {
   color: ${props => props.theme.grey};
  }

  .loading {
    margin: 0 auto;
  }

  img.settings {
    width: 2rem;
    height: 2rem;
  }

  .StyledPage {
    background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  min-height: 100vh;
  }

  table, td, tr tbody {
    border: 0; margin: 0; padding: 0;
  }
`

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html charset=UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </ThemeProvider>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
