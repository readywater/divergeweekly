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
const BottomLink = styled.div`
  width: 100%;
  align-items: bottom;
  display: flex;
  a {
    padding: ${rhythm(1)};
  }
`

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isPost =
      location.pathname && String(location.pathname).split("/").length <= 3

    return (
      <body>
        <Header>
          <div>
            <h1>
              <Link to={`/`}>{title}</Link>
            </h1>
            <h3>{subtitle}</h3>
          </div>
          <RightLink>
            <Link to={`/`}>Newsletter</Link>
            <Link to={`/sponsor`}>Sponsor Us</Link>
            <Link to={`/about`}>About the Review</Link>
          </RightLink>
        </Header>
        <Main>{children}</Main>
        <footer>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.andrewlb.com">andrewlb.com</a> and{" "}
          <a href="https://www.stupidsystems.com">Stupid Systems LLC</a>
        </footer>
      </body>
    )
  }
}

export default Layout
