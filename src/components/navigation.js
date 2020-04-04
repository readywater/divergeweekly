import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Select from "../components/select"
import { Link } from "gatsby"
import { rhythm, theme } from "../utils/typography"

const NavigationStyled = styled.div`
  max-width: 20%;
  text-align: left;
`

const Links = styled.div`
  text-align: left;
  a {
    display: block;
    padding: ${rhythm(1)} 0;
  }
`

export default class Navigation extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <NavigationStyled>
        <small>Read Previous Issues:</small>
        <Select />
        <Links>
          <Link to={`/`}>Subscribe</Link>
          <Link to={`/sponsor`}>Sponsor</Link>
          <Link to={`/about`}>About</Link>
        </Links>
      </NavigationStyled>
    )
  }
}
