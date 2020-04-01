import React, { Component } from "react"
import styled from "styled-components"
import { theme, Header } from "../../utils/typography"

const Table = styled.table`
  border: none;
  .featurejob {
    background: white;
    border: 10px solid ${theme.lightgreen};
    a {
      background: transparent;
    }
  }
  .center {
    text-align: center;
  }
  .small {
    font-size: 12px;
  }
  div {
    border: 0;
  }
  a {
    color: black;
  }
  .custom-block-heading {
    font-size: 18px;
  }
  td {
    /* max-width: 50%; */
    @media (max-width: 700px) {
      display: inline;
      width: 100%;
    }
  }
`

export default class Jobs extends Component {
  render() {
    const columns = this.props.columns || 1
    console.log(this.props.children[0])
    return (
      <>
        <Header>Global Design Jobs</Header>
        <Table
          id="jobs"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={{ margin: 0, padding: 0 }}
          width="100%"
        >
          <tbody>
            {this.props.children[0] && (
              <tr>
                <td valign="top">{this.props.children[0]}</td>
              </tr>
            )}
            {this.props.children.slice(1).map((child, i, arr) => {
              if (i % columns === 0) {
                const slice = [
                  i >= arr.length - 1 ? arr.length - 1 : i,
                  i < arr.length - columns ? i + columns : arr.length,
                ]
                const trunc = [...arr.slice(...slice)]
                return (
                  <table>
                    <tbody>
                      <tr>
                        {trunc.map(c => (
                          <td valign="top" width={`${100 / columns}%`}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                )
              } else {
                return null
              }
            })}
            <tr>
              <td className="center small">
                We find a lot of our postings on the incredible{" "}
                <a
                  href="https://groups.google.com/forum/#!forum/design-gigs-for-good"
                  target="_blank"
                >
                  Design Gigs for Good
                </a>{" "}
                board. <br />
                Give it a look!
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}
