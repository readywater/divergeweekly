import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

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

  /* overflow: hidden; */
  position: relative;
  z-index: 0;
  min-height: 200px;

  &::before {
    background: #ffcdc4;
    bottom: 100%;
    content: "";
    display: block;
    height: 200%;
    position: absolute;
    top: -100%;
    right: 0;
    transform-origin: 100% 100%;
    transform: rotate(-15deg);
    width: 150%;
    z-index: -100;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: ${rhythm(1)};
  }
`

const Main = styled.div`
  max-width: 800px;
  z-index: 0;
  position: relative;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 0 10px;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isPost =
      location.pathname && String(location.pathname).split("/").length <= 3
    const isMail =
      location.pathname && String(location.pathname).includes("/mail")

    return (
      <>
        <Header>
          <div className="top">
            <Link to={`/`}>
              <img src={`https://divergeweekly.com/logo.png`} />
            </Link>
          </div>
          {!isMail && (
            <Links>
              <Link to={`/`}>Issues</Link>
              <Link to={`/sponsor`}>Sponsor</Link>
              <Link to={`/about`}>About</Link>
            </Links>
          )}
        </Header>
        <Main>{children}</Main>
      </>
    )
  }
}

export default Layout
