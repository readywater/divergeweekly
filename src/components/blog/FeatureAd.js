import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Table = styled.table`
  background: #d4eee6;
  border: none;
  img,
  p {
    margin-bottom: 0 !important;
    a {
      margin: 0px;
      padding: 20px;
      background: white !important;
      border-radius: 10px;
      display: inline-block;
    }
  }
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
            <td className="image" rowspan="2" valign="top">
              <img src={this.props.image} />
            </td>
            <td>
              <table>
                <tr>
                  <td valign="top">
                    {this.props.children.find(c => c.type === "h2")}
                    {this.props.children.find(c => c.type === "p")}
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    {this.props.children.find(
                      c => c.type === "a" || c.props.children[0].type === "a"
                    )}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
