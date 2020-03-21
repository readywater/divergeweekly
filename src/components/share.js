import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Table = styled.table`
  background: #d4eee6;
  border: none;
  width: 70%;
  margin: 0 auto;
  img,
  p {
    margin-bottom: 0 !important;
    a {
      margin: 0px;
      padding: 20px;
      background: white !important;
      border-radius: 10px;
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
    .border {
      padding: 20px;
      background: white;
      font-weight: 800;
    }
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

export default class Share extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Table
        id="share"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style={{ marginBottom: "20px", padding: 0 }}
        width="70%"
      >
        <tbody>
          <tr cellspacing="0" cellpadding="0">
            <td>
              <table>
                <tr>
                  <td valign="top">
                    Please share Diverge weekly, either by forwarding this email
                    or by sharing this link.
                  </td>
                </tr>
                <tr>
                  <td valign="bottom" className="border">
                    <a href={this.props.url}>{this.props.url}</a>
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
