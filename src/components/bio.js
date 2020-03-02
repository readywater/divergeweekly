/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Background from "./background"
import styled from "styled-components"

const Table = styled.table`
  & > * {
    border: 0;
  }
  .block {
    padding: 20px;
    background: #d4eee6;
    border-radius: 5px;
    h4 {
      margin: 0;
    }
    a {
      margin: 0;
      display: block;
    }
  }
  .small {
    margin-top: 20px;
    font-size: 14px;
    line-height: 18px;
  }
  td {
    width: 60%;
    @media (max-width: 700px) {
      width: 100%;
      display: inline;
      padding: 20px;
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
      class="footer"
    >
      <tbody>
        <tr>
          <td valign="top" width="60%">
            <Background />
            {props.mail && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `<unsubscribe>Click here to unsubscribe</unsubscribe>`,
                }}
              />
            )}
          </td>
          <td width="40%" className="block" valign="top">
            <table border="0" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <h4>Sponsor an issue</h4>
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
                  <p class="small grey">
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
