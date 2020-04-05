import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import EmailSignup from "../components/mailsignup"
import { rhythm, theme } from "../utils/typography"
import Header from "../components/header"

const Container = styled.div`
  /* position: relative; */
`

const HeaderStyle = styled.div`
  /* overflow: hidden; */
  position: relative;
  z-index: 100;
  min-height: 200px;
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: ${rhythm(1)};
  }
`

const Main = styled.div`
  max-width: 1024px;
  &.mail {
    max-width: 600px;
  }
  z-index: 0;
  position: relative;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 0 10px;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, children, mail } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isPost =
      location.pathname && String(location.pathname).split("/").length <= 3
    const isMail =
      location.pathname && String(location.pathname).includes("/mail")

    return (
      <Container>
        <HeaderStyle>
          <Header mail={mail} path={location.pathname} />
        </HeaderStyle>
        <Main className={isMail && `mail`}>{children}</Main>
      </Container>
    )
  }
}

export default Layout
