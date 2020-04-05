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
  flex-wrap: wrap;
  &.shrink {
    .hidden {
      @media (max-width: 700px) {
        height: 50px;
      }
      height: 100px;
    }
  }
  .hidden {
    overflow: hidden;
    display: flex;
    flex: 0 1 0;
    margin: 0 auto;
    max-width: ${props => (props.mail ? "800px" : "1024px")};
    justify-content: space-around;
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

const StyleTableHeader = styled.table`
  margin: 40px auto;
  max-width: 600px;
  z-index: 100;
  text-align: left;
`

const Logo = styled.div`
  width: 50%;
  .gatsby-image-wrapper {
    max-width: 300px;
    max-height: 300px;
  }
  @media (max-width: 700px) {
    width: 25%;
    margin: 0 auto;
    .gatsby-image-wrapper {
      margin: 0 auto;
      width: 100px;
      height: 100px;
    }
  }
  &.shrink {
    .gatsby-image-wrapper {
      max-width: 100px;
      max-height: 100px;
      @media (max-width: 700px) {
        max-width: 50px;
        max-height: 50px;
      }
    }
  }
`
const Email = styled.div`
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
  &.shrink {
    width: 40%;
    @media (max-width: 700px) {
      width: 80%;
      padding: 0 20px 0 0;
      text-align: center;
    }
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
      this.setState({ shrink: false })
    } else {
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
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => {
          if (!this.props.mail)
            return (
              <StyledHeader
                mail={this.props.mail}
                className={this.state.shrink && `shrink`}
              >
                <div className="hidden">
                  <Logo className={`shrink`}>
                    <Link to="/">
                      <Image
                        fluid={data.diverge.childImageSharp.fluid}
                        alt={"Diverge Weekly"}
                        style={{
                          marginRight: rhythm(1 / 2),
                          marginBottom: 0,
                        }}
                      />
                    </Link>
                  </Logo>
                  <Email className={`shrink`}>
                    <EmailSignup mini={true} />
                  </Email>
                </div>
                <Logo>
                  <Link to="/">
                    <Image
                      fluid={data.diverge.childImageSharp.fluid}
                      alt={"Diverge Weekly"}
                      style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                      }}
                    />
                  </Link>
                </Logo>
                <Email>
                  <h3>
                    Every Wednesday, a look at design and designers through the
                    lens of global affairs.
                  </h3>
                  <EmailSignup mini={this.state.shrink} />
                </Email>
              </StyledHeader>
            )
          else
            return (
              <StyleTableHeader>
                <tbody>
                  <tr>
                    <td>
                      <Logo>
                        <Link to="https://divergeweekly.com">
                          <Image
                            fixed={data.diverge.childImageSharp.fixed}
                            alt={"Diverge Weekly"}
                            style={{
                              marginRight: rhythm(1 / 2),
                              marginBottom: 0,
                            }}
                          />
                        </Link>
                      </Logo>
                    </td>
                    <td>
                      <Email style={{ width: "100%" }}>
                        <h3>
                          Every Wednesday, a look at design and designers
                          through the lens of global affairs.
                        </h3>
                      </Email>
                    </td>
                  </tr>
                </tbody>
              </StyleTableHeader>
            )
        }}
      />
    )
  }
}
