import React, { Component } from "react"
import styled from "styled-components"

const Header = styled.h2`
  margin: 0;
  position: relative;
  z-index: 100;
  &::after {
    content: "";
    display: block;
    height: 30%;
    position: absolute;
    top: 40%;
    left: 0;
    width: 50%;
    background: yellow;
    z-index: -1 !important;
  }
`

const Table = styled.table`
  border: none;
  div {
    border: 0;
  }
  a {
    color: black;
  }
  td {
    max-width: 50%;
  }
`

export default class Jobs extends Component {
  render() {
    const columns = this.props.columns || 2
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
          <tr>
            <td colspan="2" valign="top">
              {this.props.children[0]}
            </td>
          </tr>
          {this.props.children.slice(1).map((child, i, arr) => {
            if (i % columns === 0) {
              const slice = [
                i >= arr.length - 1 ? arr.length - 1 : i,
                i < arr.length - columns ? i + columns : arr.length,
              ]
              const trunc = [...arr.slice(...slice)]
              return (
                <tr>
                  {trunc.map(c => (
                    <td valign="top" width={`${100 / columns}%`}>
                      {c}
                    </td>
                  ))}
                </tr>
              )
            } else {
              return null
            }
          })}
        </Table>
      </>
    )
  }
}
