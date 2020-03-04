import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "../../utils/typography"

const Table = styled.table`
  background: ${theme.white};
  border: none;
  margin: 20px auto;
  max-width: 70%;
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto !important;
  }
  div {
    border: 0;
  }
  h2 {
    margin: 0;
  }
  a {
    margin: 0px;
    padding: 0 5px;
    background: ${theme.white};
    border-radius: 5px;
  }
  td {
    @media (max-width: 700px) {
      display: inline;
      width: 100%;
    }
    text-align: center;
    padding: 20px;
  }
  .tweet {
    text-align: left;
    @media (max-width: 700px) {
      display: inline;
      padding: 0;
      width: 100%;
    }
  }
`

export default class Twitter extends Component {
  static propTypes = {
    who: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Table
        id="feature"
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
      >
        <tbody>
          <tr cellspacing="0" cellpadding="0">
            <td className="tweet" valign="top">
              {this.props.children.find(c => c.type === "p")}
            </td>
            <td valign="center">
              <a href={`https://twitter.com/${this.props.who}`}>
                @{this.props.who}
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
