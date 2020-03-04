import React from "react"
import { Link } from "gatsby"
import Background from "./background"
import styled from "styled-components"
import { theme } from "../utils/typography"

const Table = styled.table`
  background: #ffcdc4;
  position: relative;
  z-index: 0;
  min-height: 200px;

  td {
    @media (max-width: 700px) {
      width: 100%;
      display: inline;
      padding: 20px;
    }
  }
  .block {
    padding: 20px;
    background: ${props => props.theme.lightgreen};
    border-radius: 5px;
    h4 {
      margin: 0;
    }
    a {
      border-radius: 5px;
      background: ${theme.white};
      padding: 0 5px;
      overflow: hidden;
    }
  }
  .small {
    margin-top: 20px;
    font-size: 14px;
    line-height: 18px;
  }

  td,
  tr,
  table {
    border: 0;
  }
  .footer {
    td {
      width: 60%;
      @media (max-width: 700px) {
        width: 100%;
        display: inline !important;
        padding: 5px 20px;
      }
    }
  }
`

const Bio = props => {
  return (
    <Table
      border="0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      className="footer"
    >
      <tbody>
        <tr>
          <td valign="top" width="60%" style={{ padding: "20px" }}>
            <Background />
            {props.mail && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `<unsubscribe>Click here to unsubscribe</unsubscribe>`,
                }}
              />
            )}
          </td>
          <td width="40%" valign="top" style={{ padding: "20px" }}>
            <table
              border="0"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              className="block"
            >
              <tr>
                <td>
                  <h4 style={{ marginTop: 0 }}>Sponsor an issue</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/sponsor/issue`}>Sponsor an Issue</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/sponsor/job`}>Post a Job</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`/sponsor/ad`}>Classified Ad</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="small grey">
                    Published by{" "}
                    <a href="https://andrewlb.com">Andrew Lovett-Barron</a> at
                    Stupid Systems LLC
                    <br />
                    113 Cherry St #54268, Seattle, WA 98104, USA.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
export default Bio
