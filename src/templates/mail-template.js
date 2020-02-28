import React, { Component } from "react"
import PropTypes from "prop-types"
import { Email, Item, Span } from "react-html-email"

class MailTemplate extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <>
        {/* 100% background wrapper (grey background) */}
        <table
          border={0}
          width="100%"
          height="100%"
          cellPadding={0}
          cellSpacing={0}
          bgcolor="#F0F0F0"
        >
          <tbody>
            <tr>
              <td
                align="center"
                valign="top"
                bgcolor="#F0F0F0"
                style={{ backgroundColor: "#F0F0F0" }}
              >
                <br />
                {/* 600px container (white background) */}
                <table
                  border={0}
                  width={600}
                  cellPadding={0}
                  cellSpacing={0}
                  className="container"
                  style={{ width: 600, maxWidth: 600 }}
                >
                  <tbody>
                    <tr>
                      <td
                        className="container-padding header"
                        align="left"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 24,
                          fontWeight: "bold",
                          paddingBottom: 12,
                          color: "#DF4726",
                          paddingLeft: 24,
                          paddingRight: 24,
                        }}
                      >
                        Antwort v1.0
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="container-padding content"
                        align="left"
                        style={{
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 12,
                          paddingBottom: 12,
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <br />
                        <div
                          className="title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 18,
                            fontWeight: 600,
                            color: "#374550",
                          }}
                        >
                          Two Columns (simple)
                        </div>
                        <br />
                        <div
                          className="body-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 14,
                            lineHeight: 20,
                            textAlign: "left",
                            color: "#333333",
                          }}
                        >
                          This is an example of transforming two columns on
                          desktop into rows on mobile.
                          <br />
                          <br />
                        </div>
                        <div
                          className="hr"
                          style={{
                            height: 1,
                            borderBottom: "1px solid #cccccc",
                          }}
                        >
                          &nbsp;
                        </div>
                        <br />
                        {/* example: two columns (simple) */}
                        {/*[if mso]>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr><td width="50%" valign="top"><![endif]*/}
                        <table
                          width={264}
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          align="left"
                          className="force-row"
                        >
                          <tbody>
                            <tr>
                              <td
                                className="col"
                                valign="top"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 14,
                                  lineHeight: 20,
                                  textAlign: "left",
                                  color: "#333333",
                                  width: "100%",
                                }}
                              >
                                <strong>Herman Melville</strong>
                                <br />
                                <br />
                                It's worse than being in the whirled woods, the
                                last day of the year! Who'd go climbing after
                                chestnuts now? But there they go, all cursing,
                                and here I don't.
                                <br />
                                <br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {/*[if mso]></td><td width="50%" valign="top"><![endif]*/}
                        <table
                          width={264}
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          align="right"
                          className="force-row"
                        >
                          <tbody>
                            <tr>
                              <td
                                className="col"
                                valign="top"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 14,
                                  lineHeight: 20,
                                  textAlign: "left",
                                  color: "#333333",
                                  width: "100%",
                                }}
                              >
                                <strong>I am Ishmael</strong>
                                <br />
                                <br />
                                White squalls? white whale, shirr! shirr! Here
                                have I heard all their chat just now, and the
                                white whale—shirr! shirr!—but spoken of once!
                                and…
                                <br />
                                <br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {/*[if mso]></td></tr></table><![endif]*/}
                        {/*/ end example */}
                        <div
                          className="hr"
                          style={{
                            height: 1,
                            borderBottom: "1px solid #cccccc",
                            clear: "both",
                          }}
                        >
                          &nbsp;
                        </div>
                        <br />
                        <div
                          className="subtitle"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#2469A0",
                          }}
                        >
                          Code Walkthrough
                        </div>
                        <div
                          className="body-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 14,
                            lineHeight: 20,
                            textAlign: "left",
                            color: "#333333",
                          }}
                        >
                          <ol>
                            <li>
                              Create a columns container{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                &lt;table&gt;
                              </code>{" "}
                              just for Outlook using{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                if mso
                              </code>{" "}
                              conditionals.
                              <br />
                              The container's{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                &lt;td&gt;
                              </code>
                              's have a width of{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                50%.
                              </code>
                              <br />
                              <br />
                            </li>
                            <li>
                              Wrap our columns in a{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                &lt;table&gt;
                              </code>{" "}
                              with a <strong>fixed width</strong> of{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                264px
                              </code>
                              .
                              <ul>
                                <li>
                                  264px = (600 - 24*3) / 2 - container width
                                  minus margins divided by number of columns
                                </li>
                                <li>First table is aligned left.</li>
                                <li>Second table is aligned right.</li>
                              </ul>
                              <br />
                            </li>
                            <li>
                              Apply{" "}
                              <code
                                style={{
                                  backgroundColor: "#eee",
                                  padding: "0 4px",
                                  fontFamily: "Menlo, Courier, monospace",
                                  fontSize: 12,
                                }}
                              >
                                clear: both;
                              </code>{" "}
                              to first element after our wrapper table.
                            </li>
                          </ol>
                          <br />
                          <em>
                            <small>Last updated: 10 October 2014</small>
                          </em>
                        </div>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="container-padding footer-text"
                        align="left"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12,
                          lineHeight: 16,
                          color: "#aaaaaa",
                          paddingLeft: 24,
                          paddingRight: 24,
                        }}
                      >
                        <br />
                        <br />
                        Sample Footer text: © 2015 Acme, Inc.
                        <br />
                        <br />
                        You are receiving this email because you opted in on our
                        website. Update your{" "}
                        <a href="#" style={{ color: "#aaaaaa" }}>
                          email preferences
                        </a>{" "}
                        or{" "}
                        <a href="#" style={{ color: "#aaaaaa" }}>
                          unsubscribe
                        </a>
                        .
                        <br />
                        <br />
                        <strong>Acme, Inc.</strong>
                        <br />
                        <span className="ios-footer">
                          123 Main St.
                          <br />
                          Springfield, MA 12345
                          <br />
                        </span>
                        <a
                          href="http://www.acme-inc.com"
                          style={{ color: "#aaaaaa" }}
                        >
                          www.acme-inc.com
                        </a>
                        <br />
                        <br />
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/*/600px container */}
              </td>
            </tr>
          </tbody>
        </table>
        {/*/100% background wrapper*/}
      </>
    )
  }
}
export default MailTemplate
