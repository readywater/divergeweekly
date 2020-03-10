import React, { Component } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import FloatingLabelInput from "react-floating-label-input"
import { Button } from "./background"
import { theme } from "../utils/typography"

const FormSetup = styled.div``
const ButtonBlock = styled.div`
  display: flex;
  flex-wrap: none;
  width: 100%;
  margin-top: ${rhythm(0.5)};
  align-items: flex-start;
  p {
    flex: 1 1 0;
    margin-left: ${rhythm(0.5)};
    margin-bottom: 0;
    font-size: ${rhythm(0.5)};
    line-height: ${rhythm(0.75)};
  }
`

const BButton = styled(Button)`
  background: ${theme.pink};
  border: 1px solid ${theme.black};

  &.disabled {
    border: 1px solid #eee;
    background: ${theme.white};
  }
`

class EmailSignup extends Component {
  state = {
    active: false,
    email: this.props.email,
    hp: "",
    gdpr: true,
    success: false,
  }

  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === "number" ? parseFloat(value) : value
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validate = re.test(String(val).toLowerCase())

    this.setState({ [name]: val, active: validate })
  }

  toggleGDPR = e => {
    this.setState({ gdpr: !this.state.gdpr })
  }

  sendSubscribeRequest = async payload => {
    return fetch("https://mail.stupidsystems.com/subscribe", {
      method: "POST",
      mode: "no-cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        ...this.state,
        list: "0NehvTbaYNg26b1rs5Hikw	",
        boolean: true,
        subform: true,
      }),
    })
  }

  render() {
    if (this.state.success) {
      return (
        <div id="signup">
          <h3>Thank you!</h3>
          <p className="center">Thanks for signing up!</p>
        </div>
      )
    }
    return (
      <FormSetup>
        <form
          style={{
            marginTop: rhythm(1),
          }}
          id="newsform"
          onSubmit={async e => {
            e.preventDefault()
            const res = await this.sendSubscribeRequest()
            console.log(res)
            if (!res) return
            this.setState({ success: true })
          }}
        >
          <label
            htmlFor="email"
            style={{
              fontSize: "24px",
              fontWeight: 800,
              marginBottom: rhythm(0.5),
            }}
          >
            <FloatingLabelInput
              type="email"
              label="Enter your Email"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email || ""}
            />
          </label>
          <div style={{ display: "none" }}>
            <label htmlFor="hp">HP</label>
            <input
              type="text"
              name="hp"
              id="hp"
              onChange={this.handleChange}
              value={this.state.hp || ""}
            />
          </div>
          <ButtonBlock>
            <BButton className={!this.state.active ? "disabled" : ""}>
              <button
                type="submit"
                name="submit"
                disabled={!this.state.active}
                id="submit"
                className="center"
              >
                Subscribe
              </button>
            </BButton>
            <p>
              I consent to recieve <br />
              Diverge Weekly's newsletter.
            </p>
          </ButtonBlock>
        </form>
      </FormSetup>
    )
  }
}
export default EmailSignup
