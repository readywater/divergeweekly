import React, { Component } from "react"
import PropTypes from "prop-types"

export default class FeatureAd extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    console.log(this.props.children)
    return (
      <table
        id="feature"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style={{ margin: 0, padding: 0 }}
        width="100%"
      >
        <tbody>
          <tr>
            <td rowspan="2">
              <img src={this.props.image} />
            </td>
            <td colspan="2">
              {this.props.children.find(c => c.type === "h2")}
              {this.props.children.find(c => c.type === "p")}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              {this.props.children.find(
                c => c.type === "a" || c.props.children[0].type === "a"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
