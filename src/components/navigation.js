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
        <Select options={this.props.options} value={this.props.options[0]} />
        <Links>
          <Link to={`/`}>Home</Link>
          <Link to={`/sponsor`}>Post an Ad or Job!</Link>
          <Link to={`/about`}>About Diverge</Link>
        </Links>
      </NavigationStyled>
    )
  }
}
