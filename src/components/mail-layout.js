import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Body = styled.div`
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
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const header = (
      <>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            The Converge Review{" "}
            <span style={{ fontSize: ".8rem" }}>
              Your weekly briefing on design in a global context.
            </span>
          </Link>
        </h3>
      </>
    )

    return (
      <Body
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          position: "relative",
          maxWidth: location.pathname === rootPath ? rhythm(36) : rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main style={{ display: `flex`, flexWrap: `wrap` }}>{children}</main>
        <footer>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.andrewlb.com">andrewlb.com</a> and{" "}
          <a href="https://www.stupidsystems.com">Stupid Systems LLC</a>
        </footer>
      </Body>
    )
  }
}

export default Layout
