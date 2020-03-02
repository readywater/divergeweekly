import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Table = styled.table`
  background: #d4eee6;
  border: none;
  div {
    border: 0;
  }
  h2 {
    margin: 0;
  }
  a {
    margin: 0px;
    padding: 20px;
    background: white;
    border-radius: 10px;
  }
  td {
    @media (max-width: 700px) {
      display: inline;
      width: 100%;
    }
    text-align: center;
    padding: 20px;
  }
  .image {
    max-width: 30%;
    @media (max-width: 700px) {
      display: inline;
      padding: 0;
      width: 100%;
    }
  }
`

export default class FeatureAd extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
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
            <td class="image" rowspan="2" valign="top">
              <img src={this.props.image} />
            </td>
            <td colspan="2" valign="top">
              {this.props.children.find(c => c.type === "h2")}
              {this.props.children.find(c => c.type === "p")}
            </td>
          </tr>
          <tr cellspacing="0" cellpadding="0">
            <td colspan="2" valign="bottom">
              {this.props.children.find(
                c => c.type === "a" || c.props.children[0].type === "a"
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
