import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import EmailSignup from "./mailsignup"
import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  flex: 0 1 0;
  margin: 40px auto;
  max-width: 1024px;
  justify-content: left;
  align-items: center;
`

const Logo = styled.div`
  width: 50%;
`
const Email = styled.div`
  width: 40%;
`

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <StyledHeader>
        <Logo>
          <img src="./diverge.png" alt="Diverge Weekly" />
        </Logo>
        <Email>
          <h3>
            Every Wednesday, a look at Design Practice from around the world and
            its impact on those who inhabit it.
          </h3>
          <p>
            Regional design news, international jobs, featured designers, ways
            for designers to get involved in international work, and a weekly
            issue focus to help inform and inspire.
          </p>
          <EmailSignup />
        </Email>
      </StyledHeader>
    )
  }
}
