import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, Header } from "../../utils/typography"

const Table = styled.table`
  border: none;
  position: relative;
  z-index: 10;
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
    @media (max-width: 400px) {
      display: inline;
      width: 100%;
    }
    text-align: center;
    padding: 0;
  }
  .image {
    width: 50%;
    float: right;
    margin: 20px;
    @media (max-width: 700px) {
      display: inline;
      padding: 0;
      width: 100%;
    }
  }
  .sig {
    td {
      text-align: left;
      margin: 0;
      padding: 0;
    }
    img {
      display: block;
      margin: 0 !important;
    }
  }
  .footer {
    td {
      @media (max-width: 700px) {
        display: inline;
        width: 100%;
      }
      margin: 0;
      padding: 20px;
      width: 50%;
      text-align: left;
    }
    a {
      background: ${theme.lightgreen};
    }
  }
  .quote {
    font-size: 12px;
    padding: 20px;
    background: ${theme.lightgreen};
    width: 100%;
  }
  .main {
    text-align: left;
    padding: 0;
  }
`

export default class Main extends Component {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
  }

  render() {
    // console.log("Main props", this.props)
    return (
      <>
        <Table
          id="main"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
        >
          <tbody>
            <tr cellspacing="0" cellpadding="0">
              <td valign="top" className="main">
                <div className="image">
                  {this.props.children[0]}
                  <small>Image credit: {this.props.credit}</small>
                </div>
                {this.props.children.slice(1)}
                <table className="sig">
                  <tr>
                    <td>See you next Wednesday,</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://divergeweekly.com/alb.png"
                        alt="Andrew Lovett-Barron"
                      />
                      Andrew Lovett-Barron
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="footer">
                  <tbody>
                    <tr>
                      <td>
                        Thanks for following Diverge Weekly. If you'd like to
                        support us, please consider{" "}
                        <a href="/sponsor/issue">sponsoring an issue</a>,{" "}
                        <a href="/sponsor/job">posting a job</a>, or{" "}
                        <a href="/sponsor/ad">sharing a small ad</a>.
                      </td>
                      <td>
                        <div className="quote">{this.props.quote}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}
