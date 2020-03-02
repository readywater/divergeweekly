import React, { Component } from "react"
import styled from "styled-components"

const Table = styled.table`
  border: none;
  div {
    border: 0;
  }
  h2 {
    margin: 0;
  }
  a {
    color: black;
  }
  td {
    max-width: 50%;
    @media (max-width: 700px) {
      display: inline;
      width: 100%;
    }
  }
`

const Header = styled.h2`
  margin: 0 auto;
  padding: 10px;
  background: plum;
  text-align: center;
  margin-top: 40px;
  max-width: 300px;
  transform: skew(-10deg);
  -webkit-transform: skew(-10deg);
  -moz-transform: skew(-10deg);
`

export default class Region extends Component {
  render() {
    const columns = this.props.columns || 2
    return (
      <>
        <Header>Happenings</Header>
        <Table
          id="regions"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={{ margin: 0, padding: 0 }}
          width="100%"
        >
          {this.props.children.map((child, i, arr) => {
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
