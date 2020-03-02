import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Header = styled.div`
  background: #ffcdc4;
  .top {
    max-width: 400px;
    padding: 0 20px;
    margin: 0 auto;
    img {
      width: 100%;
      margin: 20px auto 0 auto;
    }
  }
`

const RightLink = styled.div`
  display: flex;
  justify-content: center;
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
          <div className="top">
            <Link to={`/`}>
              <img src="/logo.png" />
            </Link>
          </div>
          <RightLink>
            <Link to={`/`}>Issues</Link>
            <Link to={`/sponsor`}>Sponsor</Link>
            <Link to={`/about`}>About</Link>
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
