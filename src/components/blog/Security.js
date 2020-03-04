import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, Header } from "../../utils/typography"

const Table = styled.table`
  background: ${theme.lightgreen};
  border: none;
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
    text-align: left;
    padding: 20px;
    a {
      padding: 10px;
      margin-top: 10px;
      background: #ffffff !important;
      display: block;
      font-weight: 800;
    }
  }
  .image {
    width: 50%;
    @media (max-width: 700px) {
      display: inline;
      padding: 0;
      width: 100%;
    }
  }
`

export default class Security extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
  }

  render() {
    return (
      <>
        <Header>Security Blanket</Header>
        <Table
          id="feature"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={{ margin: 0, padding: 0 }}
          width="100%"
        >
          <tbody>
            <tr cellspacing="0" cellpadding="0">
              <td className="image" rowspan="2" valign="top">
                {this.props.children[0]}
                <small>Image credit: {this.props.credit}</small>
              </td>
              <td colspan="2" valign="top">
                {this.props.children.slice(1)}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}
