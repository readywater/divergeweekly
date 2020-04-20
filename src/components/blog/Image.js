import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, Header } from "../../utils/typography"

const Table = styled.table`
  background: ${theme.white};
  border: none;
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto !important;
  }
  a {
    margin: 0px;
    padding: 0 5px;
    background: ${theme.white};
    border-radius: 5px;
  }
  td {
    margin: 0 auto;
    @media (max-width: 700px) {
      display: inline;
      width: 100%;
    }
    text-align: center;
    padding: 20px;
    p {
      text-align: center !important;
    }
  }
`

export default class ImageBlock extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
  }

  render() {
    return (
      <>
        <Table
          id="image"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={{ margin: 0, padding: 0 }}
          width="100%"
        >
          <tbody>
            <tr cellspacing="0" cellpadding="0">
              <td className="image" valign="top">
                <a href={this.props.link}>{this.props.children[0]}</a>
                <br />
                <small>credit: {this.props.credit}</small>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}
