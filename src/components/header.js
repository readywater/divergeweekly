import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import EmailSignup from "./mailsignup"
import { rhythm, theme } from "../utils/typography"

const StyledHeader = styled.div`
  display: flex;
  flex: 0 1 0;
  margin: 40px auto;
  max-width: ${props => (props.mail ? "800px" : "1024px")};
  justify-content: left;
  align-items: center;
  z-index: 100;
  &.shrink {
    .hidden {
      height: 100px;
    }
  }
  .hidden {
    overflow: hidden;
    display: flex;
    flex: 0 1 0;
    margin: 0 auto;
    max-width: ${props => (props.mail ? "800px" : "1024px")};
    justify-content: left;
    align-items: center;
    position: fixed !important;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    transition: 0.2s height cubic-bezier(0.62, 0.28, 0.23, 0.99);
    z-index: 99;
  }
`

const Logo = styled.div`
  width: 50%;
`
const Email = styled.div`
  width: 40%;
  &.shrink {
    position: fixed !important;
    background: ${theme.white};
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }
`

export default class Header extends Component {
  static propTypes = {
    mail: PropTypes.bool,
  }

  state = { shrink: false }

  componentDidMount = () => {
    window.addEventListener("scroll", this.resizeHeaderOnScroll)
  }

  resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 400

    if (distanceY < shrinkOn) {
      console.log("Mini Hidden")
      this.setState({ shrink: false })
    } else {
      console.log("Mini Visible")
      this.setState({ shrink: true })
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query BGQuery {
            diverge: file(absolutePath: { regex: "/diverge.png/" }) {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <StyledHeader
            mail={this.props.mail}
            className={this.state.shrink && `shrink`}
          >
            <div className="hidden">
              <Logo shrink={this.state.shrink}>
                <Link to="/">
                  <Image
                    fixed={data.diverge.childImageSharp.fixed}
                    alt={"Diverge Weekly"}
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      maxWidth: 100,
                      maxHeight: 100,
                    }}
                  />
                </Link>
              </Logo>
              <Email shrink={true}>
                <EmailSignup mini={true} />
              </Email>
            </div>
            <Logo shrink={this.state.shrink}>
              <Link to="/">
                <Image
                  fixed={data.diverge.childImageSharp.fixed}
                  alt={"Diverge Weekly"}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    maxWidth: 300,
                  }}
                />
              </Link>
            </Logo>
            <Email shrink={this.state.shrink}>
              <h3>
                Every Wednesday, a look at design and designers through the lens
                of global affairs to inform, inspire, and activate.
              </h3>
              <EmailSignup mini={this.state.shrink} />
            </Email>
          </StyledHeader>
        )}
      />
    )
  }
}
