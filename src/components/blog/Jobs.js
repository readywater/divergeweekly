import React, { Component } from "react"

export default class Jobs extends Component {
  render() {
    const columns = this.props.columns || 2
    return (
      <>
        <h2>Global Design Jobs</h2>
        <table
          id="jobs"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={{ margin: 0, padding: 0 }}
          width="100%"
        >
          <tr>
            <td colspan="2">{this.props.children[0]}</td>
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
                    <td>{c}</td>
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
