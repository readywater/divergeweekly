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
`

const Links = styled.div`
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
  p {
    @media (max-width: 700px) {
      padding: 0 10px;
    }
  }
`

const Main = styled.div`
  max-width: 800px;
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
        {!isMail && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
            </script><script type="text/javascript">window.Beacon('init', 'd65bff5e-6a17-4e46-8426-b55170639b6d')</script>`,
            }}
          />
        )}
      </>
    )
  }
}

export default Layout
