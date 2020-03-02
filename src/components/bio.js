/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Background from "./background"
import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <table
      border="0"
      width="640"
      cellpadding="0"
      cellspacing="0"
      class="footer"
    >
      <tbody>
        <tr>
          <td>
            <Background />
          </td>
          <td>
            <div>
              <h3>Sponsor an issue</h3>
              <p>Feature Ad</p>
              <p>Job Ad</p>
              <p>Classified </p>
            </div>
            <div>
              <p class="small grey">
                This newsletter is published by{" "}
                <a href="https://andrewlb.com">Andrew Lovett-Barron</a> through
                Stupid Systems LLC, at 113 Cherry St #54268, Seattle, WA 98104,
                USA.
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
export default Bio
