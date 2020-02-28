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

    return (
      <Body>
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
