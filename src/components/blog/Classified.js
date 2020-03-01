import React, { Component } from "react"

export default class Classified extends Component {
  render() {
    const columns = this.props.columns || 2
    return (
      <>
        <h3>Classified</h3>
        <table
          id="classified"
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
                  {trunc.map(t => (
                    <td>{t}</td>
                  ))}
                </tr>
              )
            } else {
              return null
            }
          })}
        </table>
      </>
    )
  }
}
