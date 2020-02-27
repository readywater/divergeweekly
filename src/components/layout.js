import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const RightLink = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  align-items: bottom;
  display: flex;
  a {
    padding: ${rhythm(1)};
  }
`

const Body = styled.div`
background: #FFCDC4;
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
    let header

    if (location.pathname === rootPath) {
      header = (
        <Header>
          <div>
            <h1
              style={{
                ...scale(1.5),
                marginBottom: rhythm(0.5),
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
                The Converge Review
              </Link>
            </h1>
            <h3 style={{ marginTop: "0", marginBottom: rhythm(1.5) }}>
              Your weekly briefing on design in a global context.
            </h3>
          </div>
          <RightLink>
            <Link style={{ boxShadow: `none` }} to={`/sponsor`}>
              Sponsor Us
            </Link>
            <Link style={{ boxShadow: `none` }} to={`/about`}>
              About the Review
            </Link>
          </RightLink>
        </Header>
      )
    } else {
      header = (
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
    }

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
